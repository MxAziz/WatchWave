
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
        <figure class="h-[200px]">
            <img
            src=${video.thumbnail}
            class="h-full w-full object-cover"
            alt="Shoes" />
        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div>
                <img class="size-10 rounded-full object-cover" src=${video.authors[0].profile_picture} >
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class="flex items-center gap-2">
                    <p class="text-gray-500">${video.authors[0].profile_name}</p>
                    <img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png" alt="">
                </div>
                <p></p>
            </div>


        </,div>
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

// ------------>
// const demo= {
//     "category_id": "1001",
//     "video_id": "aaag",
//     "thumbnail": "https://i.ibb.co/DRxB1Wm/sunris.jpg",
//     "title": "Sunrise Reverie",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/yQFJ42h/ava.jpg",
//             "profile_name": "Ava Johnson",
//             "verified": false
//         }
//     ],
//     "others": {
//         "views": "1.1K",
//         "posted_date": "16950"
//     },
//     "description": "'Sunrise Reverie' by Ava Johnson takes listeners on a serene journey through tranquil melodies and soft harmonies. With 1.1K views, this track is perfect for morning relaxation or an evening wind-down. Ava's heartfelt lyrics and soothing voice create a sense of peace, making it a go-to for fans seeking calm and inspiration in their musical choices."
// }
// ------------>