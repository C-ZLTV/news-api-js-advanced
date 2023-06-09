import { displayTenStories } from "./main.js";

//MODEL

async function fetchStoriesIds() {
  try {
    const response = await fetch(
      "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"
    );

    if (!response.ok) {
      throw new Error(`Server response: ${response.status}`);
    }

    const ids = response.json();
    return ids;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

async function fetchStory(id) {
  try {
    const response = await fetch(
      `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
    );

    if (!response.ok) {
      throw new Error(`Server response: ${response.status}`);
    }

    const story = response.json();

    return story;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

export async function fetchTenStories(index) {
  try {
    const ids = await fetchStoriesIds();

    const chunkedIds = _.chunk(ids, 10);

    let tenStories = await Promise.all(
      chunkedIds[index].map((id) => fetchStory(id))
    );

    displayTenStories(tenStories);

    return tenStories;
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}
