<script>
  import Calendar from "../components/calendarSearchOptions.svelte";
  import SearchDisplay from "../components/searchDisplay.svelte";
  import {
    getRecordsByDate,
    getRecords,
    getRecordsByTwoDates,
  } from "../api/records";
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

</script>

<main>
  <Calendar on:searchValues={handleSearch} />

  {#if searchResults}
    <SearchDisplay recordList={searchResults} />
  {/if}
</main>

<style>
</style>
