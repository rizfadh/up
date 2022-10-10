import './js/components/news-list.js';
import './js/components/activity-list.js';

const getData = () => {
  fetch('./src/data/data.json')
    .then(res => res.json())
    .then(data => {
      displayNews(data.news);
      displayActivity(data.activity);
    })
    .catch(error => console.log(error));
}

const displayActivity = (activities) => {
  activities.reverse();
  activities.length = 6;
  const container = document.querySelector('#activityContainer');
  const activityList = document.createElement('activity-list');
  activityList.contents = activities;
  const moreActivities = document.createElement('div');
  moreActivities.classList.add('mt-5', 'text-center');
  moreActivities.innerHTML = `
    <button class="btn btn-warning text-dark-blue rounded-style fw-bold px-4">
      lihat semua kegiatan <i class="fa-solid fa-arrow-right"></i>
    </button>
  `;
  container.append(activityList, moreActivities);
};

const displayNews = (news) => {
  news.reverse();
  news.length = 8;
  const container = document.querySelector('#newsContainer');
  const newsList = document.createElement('news-list');
  newsList.contents = news;
  const moreNews = document.createElement('div');
  moreNews.classList.add('mt-5', 'text-center');
  moreNews.innerHTML = `
    <button class="btn btn-warning text-dark-blue rounded-style fw-bold px-4">
      lihat semua berita <i class="fa-solid fa-arrow-right"></i>
    </button>
  `;
  container.append(newsList, moreNews);
}

document.addEventListener('DOMContentLoaded', () => {
  getData();
});