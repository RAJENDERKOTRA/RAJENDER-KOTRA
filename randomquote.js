
let quoteEle = document.getElementById("quote");
let authorEle = document.getElementById("author");
let btn = document.getElementById("button")

let quoteList = [
    {
        quote: 'JainWorld has been pioneering since 1996 in imparting information about Jain religion. It is a non-profit organization dedicated to the preservation of Jainism',
        author: 'Ghnadi'
    }, {
        quote: 'Mohandas Karamchand Gandhi was an Indian lawyer, anti-colonial nationalist and political ethicist who employed nonviolent resistance ',
        author: 'Thilak'
    }, {
        quote: 'We Have Stories, Art And Media. Learn All About The Global Hero Mahatma Gandhi. Sign-Up For Newsletters. ',
        author: 'sandeep'
    }, {
        quote: 'Mohandas Karamchand Gandhi (/ˈɡɑːndi, ˈɡændi/; · GAHN-dee ; Born and raised in a Hindu ; Assuming leadership of the Indian National Congress ',
        author: 'shiva'
    }, {
        quote: 'Submit Your Films. Courses: Inspiring essays, short hero films, Art celebrating heroes.',
        author: 'sunitha'
    }
]
btn.onclick = function () {
    let i = Math.floor(Math.random() * quoteList.length)
    quoteEle.innerText = quoteList[i].quote;
    authorEle.innerText = `-: ${quoteList[i].author}`;
}