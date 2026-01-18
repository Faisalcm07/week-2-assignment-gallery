console.log("hello world!")

const thumbnails = document.querySelector(".thumbnails")
const display = document.querySelector(".display")

currentIndex = 0

const images = [{src: `https://plus.unsplash.com/premium_photo-1664299195833-da39fd653a00?q=80&w=1257&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
                 alt: `A red fox`},

                 {src:`https://images2.alphacoders.com/109/thumb-1920-1093473.jpg`,
                  alt:`A deer in snow.` },

                 {src:`https://images.unsplash.com/photo-1562512609-2611f7154c58?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dp`,
                  alt:`A liones sitting on a rocky surface with the sun in the background`},

                  {src:`https://images.unsplash.com/photo-1586398798112-9aa9aa7b35f1?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
                  alt:`Zebra's on a brown grass field`},

                  {src:`https://images.unsplash.com/photo-1560141687-995853323f02?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
                  alt:`Pink flamingo's`}
                 
]

function createThumbnails( ){images.forEach(function(image, index) {
        const imgElement = document.createElement('img')
        imgElement.src = image.src
        imgElement.alt = image.alt

        thumbnails.append(imgElement)

        imgElement.addEventListener("click", function (){
            console.log(image)

            currentIndex = index

            createDisplayImage(images[currentIndex])
        })
    })

}
    

createThumbnails();

function createDisplayImage (imgdata){

     display.innerHTML = ''
     const displayImage = document.createElement('img')

     displayImage.src = imgdata.src
     displayImage.alt = imgdata.alt
     display.append(displayImage)
}

createDisplayImage(images[currentIndex]);

function ChangeImage (nextImg) {

    currentIndex += nextImg

    if (currentIndex < 0 ){
        currentIndex = images.length -1 
    }

    if (currentIndex >= images.length) {
        currentIndex = 0}
    
    createDisplayImage(images[currentIndex]);

    }

    document.getElementById("next").addEventListener("click", function(){ChangeImage(1)})
    document.getElementById("prev").addEventListener("click", function(){ChangeImage(-1)})







