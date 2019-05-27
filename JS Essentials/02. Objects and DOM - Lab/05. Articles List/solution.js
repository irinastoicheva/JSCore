function createArticle() {
	let createTitleElement = document.getElementById('createTitle');
	let createTitleValue = createTitleElement.value;
    let isTitleNotEmpty = false;
    if (createTitleValue != '')
    {
        isTitleNotEmpty = true;
    }

    let createContentElement = document.getElementById('createContent');
    let createContentValue = createContentElement.value;
    let isContentNotEmpty = false;
    if (createContentValue != '')
    {
        isContentNotEmpty = true;
    }

    if (isTitleNotEmpty && isContentNotEmpty) {
        let titleElement = document.createElement('h3');
        titleElement.textContent = createTitleValue;

        let contentElement = document.createElement('p');
        contentElement.textContent = createContentValue;

        let articleElement = document.createElement('article');
        articleElement.appendChild(titleElement);
        articleElement.appendChild(contentElement);

        let sectionArticles = document.getElementById('articles');
        sectionArticles.appendChild(articleElement);

        createTitleElement.value = '';
        createContentElement.value = '';
    }
}
