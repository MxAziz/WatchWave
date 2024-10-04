
// fetch, load show categories on html

// create loadCategories
const loadCategories = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error =>console.error(error))
}
// create loadVideos
const loadVideos = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(error =>console.error(error))
}
// display videos
const displayVideos = (videos) =>{
    const videosContainer = document.getElementById('videos');
    videos.forEach(video  => {
        console.log(video);
        const card = document.createElement('div');
        card.classList = "card card-compact "
        card.innerHTML = `
        <figure>
            <img
            src=${video.thumbnail}
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        videosContainer.append(card);

    });

}

// create displayCategories
const displayCategories = (categories) =>{
    const categoryContainer = document.getElementById('categories');

    categories.forEach(item => {
        console.log(item);
        // create a btn
        const button = document.createElement('button')
        button.classList = 'btn';
        button.innerText = item.category;
        // add btn to category container
        categoryContainer.append(button);

    });


}


loadCategories();
loadVideos();
