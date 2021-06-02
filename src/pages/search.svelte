<script>
  import Calendar from "../components/calendarSearchOptions.svelte";
  import SearchDisplay from "../components/searchDisplay.svelte";
  import { deleteRecord } from "../api/records";
  import { onMount } from "svelte";
  import {
    getRecordsByDate,
    getRecords,
    getRecordsByTwoDates,
  } from "../api/records";
  var ifRecordForDate = true;

  //handles user selection of type of search
  async function handleSearch(event) {
    //if no dates get all records
    if (!event.detail.dateTwo && !event.detail.dateOne) {
      searchResults = await getRecords();
      //if one search date selected get single record
    } else if (!event.detail.dateTwo) {
      searchResults = await getRecordsByDate(event.detail.dateOne);
      //console.log(!searchResults[0]);
      if (!searchResults[0]) {
        ifRecordForDate = false;
        setTimeout(() => {
          ifRecordForDate = true;
        }, 2000);
      }

      //if two search dates seleted get two record dates and all records between
    } else {
      searchResults = await getRecordsByTwoDates(
        event.detail.dateOne,
        event.detail.dateTwo
      );
    }
  }
  var searchResults;
  onMount(async () => {
    searchResults = await getRecords();
  });

  // delete a record from the view
  const deleteRecFromView = (thisId) => {
    searchResults = searchResults.filter((rec) => rec.id !== thisId);
    return;
  };
  // delete a record from db and call to delete from view
  const deleteThisRecord = async (id) => {
    const response = await deleteRecord(id);
    deleteRecFromView(id);
    return response;
  };

</script>

<main>
  <Calendar on:searchValues={handleSearch} />

  {#if searchResults}
    <SearchDisplay recordList={searchResults} deleteRecord={deleteThisRecord} />
  {/if}
  {#if ifRecordForDate == false}
    <h3 id="alertUser">No record exists for this date</h3>
  {/if}
</main>

<style>
  main {
    text-align: center;
  }
  #alertUser {
    color: rgb(223, 139, 139);
  }

</style>
