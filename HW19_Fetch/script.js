const BASE_URL = "https://rickandmortyapi.com/api/character/";

class CharacterList {
    constructor() {
        this.page = 1;
        this.data = {};

        this.list = document.createElement("ul");

        this.prevButton = document.createElement("button");
        this.prevButton.innerText = "PREV";
        this.prevButton.dataset.type = "prev";

        this.nextButton = document.createElement("button");
        this.nextButton.innerText = "NEXT";
        this.nextButton.dataset.type = "next";

        this.pageLabel = document.createElement("span");
    }

    loadCharacters() {
        const searchParams = new URLSearchParams();
        searchParams.set("page", this.page);

        return fetch(`${BASE_URL}?${searchParams}`)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error("Error loading data");
                }
            })

            .then(data => {
                this.data = {
                    hasNextPage: data.info.next !== null,
                    hasPrevPage: data.info.prev !== null,
                    results: data.results
                };
                this.onDataLoad();
            })

            .catch(err => console.error(err));
    }

    onDataLoad() {
        this.list.innerHTML = "";

        for (const user of this.data.results) {
            const listItem = document.createElement("li");
            listItem.innerText = user.name;
            this.list.appendChild(listItem);
        }

        this.pageLabel.innerText = this.page;

        this.prevButton.disabled = !this.data.hasPrevPage;
        this.nextButton.disabled = !this.data.hasNextPage;
    }

    onButtonClick(event) {
        switch (event.target.dataset.type) {
            case "next": {
                this.page++;
                this.loadCharacters();
                break;
            }
            case "prev": {
                this.page--;
                this.loadCharacters();
                break;
            }
            default:
                break;
        }
    }

    render() {
        [
            this.nextButton,
            this.prevButton
        ].forEach(button => button.addEventListener("click", this.onButtonClick.bind(this)));

        const paginatorWrapper = document.createElement("div");
        paginatorWrapper.appendChild(this.prevButton);
        paginatorWrapper.appendChild(this.pageLabel);
        paginatorWrapper.appendChild(this.nextButton);

        document.body.appendChild(this.list);
        document.body.appendChild(paginatorWrapper);

        this.loadCharacters();
    }
}

const result = new CharacterList();
result.render();









// const BASE_URL = "https://rickandmortyapi.com/api/character/";

// fetch(BASE_URL)
//     .then(response => response.json())
//     .then((data) => {
//         class CharacterList {
//             constructor() {
//                 this.page = 1;
//                 this.data = {};

//                 this.list = document.createElement("ul");

//                 this.prevButton = document.createElement("button");
//                 this.prevButton.innerText = "PREV";
//                 this.prevButton.dataset.type = "prev";

//                 this.nextButton = document.createElement("button");
//                 this.nextButton.innerText = "NEXT";
//                 this.nextButton.dataset.type = "next";

//                 this.pageLabel = document.createElement("span");
//             }

//             loadCharacters() {
//                 const xhr = new XMLHttpRequest();
//                 xhr.responseType = "json";

//                 const searchParams = new URLSearchParams();
//                 searchParams.set("page", this.page);

//                 xhr.open("GET", `${BASE_URL}?${searchParams}`);

//                 xhr.onload = () => {
//                     if (xhr.status === 200) {
//                         this.data = {
//                             hasNextPage: xhr.response.info.next !== null,
//                             hasPrevPage: xhr.response.info.prev !== null,
//                             results: xhr.response.results
//                         };
//                         this.onDataLoad();
//                     } else {
//                         console.error("Something went wrong");
//                     }
//                 };

//                 xhr.onerror = function () {
//                     console.error("ERROR");
//                 }

//                 xhr.send();
//             }

//             onDataLoad() {
//                 this.list.innerHTML = "";

//                 for (const user of this.data.results) {
//                     const listItem = document.createElement("li");
//                     listItem.innerText = user.name;
//                     this.list.appendChild(listItem);
//                 }

//                 this.pageLabel.innerText = this.page;

//                 this.prevButton.disabled = !this.data.hasPrevPage;
//                 this.nextButton.disabled = !this.data.hasNextPage;
//             }

//             onButtonClick(event) {
//                 switch (event.target.dataset.type) {
//                     case "next": {
//                         this.page++;
//                         this.loadCharacters();
//                         break;
//                     }
//                     case "prev": {
//                         this.page--;
//                         this.loadCharacters();
//                         break;
//                     }
//                     default:
//                         break;
//                 }
//             }

//             render() {
//                 [
//                     this.nextButton,
//                     this.prevButton
//                 ].forEach(button => button.addEventListener("click", this.onButtonClick.bind(this)));

//                 const paginatorWrapper = document.createElement("div");
//                 paginatorWrapper.appendChild(this.prevButton);
//                 paginatorWrapper.appendChild(this.pageLabel);
//                 paginatorWrapper.appendChild(this.nextButton);

//                 document.body.appendChild(this.list);
//                 document.body.appendChild(paginatorWrapper);

//                 this.loadCharacters();
//             }
//         }

//         data = new CharacterList();
//         data.render();
//     })
//     .catch(err => console.error(err));