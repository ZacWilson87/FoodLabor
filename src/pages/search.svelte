<script>
  import Calendar from "../components/calendarSearchOptions.svelte";
  import SearchDisplay from "../components/searchDisplay.svelte";
  import {
    getRecordsByDate,
    getRecords,
    getRecordsByTwoDates,
  } from "../api/records";
  import { deleteRecord } from "../api/records";

  import { onMount } from "svelte";

  async function handleSearch(event) {
    if (!event.detail.dateTwo && !event.detail.dateOne) {
      searchResults = await getRecords();
    } else if (!event.detail.dateTwo) {
      searchResults = await getRecordsByDate(event.detail.dateOne);
      console.log(searchResults);
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
  // delete a record from db and call to delete from view
  const deleteThisRecord = async (id) => {
    const response = await deleteRecord(id);
    deleteRecFromView(id);
    return response;
  };
  // delete a record from the view
  const deleteRecFromView = (thisId) => {
    searchResults = searchResults.filter((rec) => rec.id !== thisId);
    return;
  };

</script>

<main>
  <Calendar on:searchValues={handleSearch} />

  {#if searchResults}
    <SearchDisplay recordList={searchResults} deleteRecord={deleteThisRecord} />
  {/if}
</main>

<style>
</style>
