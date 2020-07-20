// ---------- Chapter 52 - 57 "Modal" ----------

// 1.

// Solution:
    function showImage(e) {

        // console.log(e.firstElementChild.src)
        
        var modalImage = document.getElementById('modalImage');
        modalImage.src = e.firstElementChild.src;



    }