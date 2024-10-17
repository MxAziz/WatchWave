
function getTimeString(time) {
    const hour = parseInt(time / 3600);
    let remainingSecond = time % 3600;
    const minute = parseInt(remainingSecond / 60);
    // remainingSecond = remainingSecond / 60;
    return `${hour} hour ${minute}minute ago`
}

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

// load videos by specific btn
const loadCategoryVideos = (id) => {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then(res => res.json())
        .then(data => {
            const activeBtn = document.getElementById(`btn-${id}`)
            console.log(activeBtn);

            activeBtn.classList.add("active");
            displayVideos(data.category)
        })
        .catch(error =>console.error(error))
}
// display videos
const displayVideos = (videos) =>{
    const videosContainer = document.getElementById('videos');
    videosContainer.innerHTML = "";

    if (videos.length === 0) {
        videosContainer.classList.remove('grid')
        videosContainer.innerHTML = `
        <div class=" flex flex-col gap-5 justify-center items-center mt-8">
            <img src="./assets/Icon.png">
            <h2 class="text-center text-2xl font-bold">No Content Here in this Category</h2>
        </div>
        `;
        return;
    } else {
        videosContainer.classList.add('grid')
    }

    videos.forEach(video  => {
        console.log(video);
        const card = document.createElement('div');
        card.classList = "card card-compact "
        card.innerHTML = `
        <figure class="h-[200px] relative">
            <img
            src=${video.thumbnail}
            class="h-full w-full object-cover"
            />
            ${video.others.posted_date?.length === 0 ? "" : `<span class="absolute right-2 bottom-2 bg-black text-white text-xs rounded p-1">${getTimeString(video.others.posted_date)}</span>`}

        </figure>

        <div class="px-0 py-2 flex gap-2">
            <div>
                <img class="size-10 rounded-full object-cover" src=${video.authors[0].profile_picture} >
            </div>
            <div>
                <h2 class="font-bold">${video.title}</h2>
                <div class="flex items-center gap-2">
                    <p class="text-gray-500">${video.authors[0].profile_name}</p>
                    ${video.authors[0].verified === true ? `<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png">` : '' }
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
        // create a btn
        const buttonContainer = document.createElement('div')
        buttonContainer.innerHTML = `
        <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
          ${item.category}
        </button>
        `
        // add btn to category container
        categoryContainer.append(buttonContainer);
    });
}


loadCategories();
loadVideos();
