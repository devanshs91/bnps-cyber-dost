var clickCount = 0

function functomove(x) {
    if (clickCount%2==0 || clickCount==0) {
        x.classList.toggle("change");
        document.querySelector('.navbar').setAttribute('style', 'width: auto')
        document.querySelector('.navbar').setAttribute('style', 'height: 50vh')
        // doc
        document.querySelector('#report').setAttribute('style', 'display: block')
        document.querySelector('#cc').setAttribute('style', 'display: block')
        document.querySelector('#team').setAttribute('style', 'display: block')
        document.querySelector('#reportli').setAttribute('style', 'display: block')
        document.querySelector('#ccli').setAttribute('style', 'display: block')
        document.querySelector('#teamli').setAttribute('style', 'display: block')

    }
    else {
        x.classList.toggle("change");
        document.querySelector('.navbar').setAttribute('style', 'width: ')
        document.querySelector('.navbar').setAttribute("style", 'height: ')
        document.querySelector('#report').setAttribute('style', 'display:')
        document.querySelector('#cc').setAttribute('style', 'display:')
        document.querySelector('#team').setAttribute('style', 'display:')
        document.querySelector('#reportli').setAttribute('style', 'display:')
        document.querySelector('#ccli').setAttribute('style', 'display:')
        document.querySelector('#teamli').setAttribute('style', 'display:')
    }
    clickCount +=1
  } 

function sumbitted() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "http://localhost:3000/formCheck"); 
  xhr.send();
  xhr.responseType = "json";
  xhr.onload = () => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        console.log(data);
      } else {
        console.log(`Error: ${xhr.status}`);
    }
};
}