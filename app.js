//selectors
//selecting the container
let container = document.querySelector(".container");
//scroll event
window.addEventListener("scroll", function () {
	let scrollHeight = document.documentElement.scrollHeight;
	let scrollTop = document.documentElement.scrollTop;
	let clientHeight = document.documentElement.clientHeight;
	if (scrollTop + clientHeight >= scrollHeight - 1) {
		setTimeout(createPost, 500);
	}
});

// createPost fucntion creates new post every time user comes at bottom of the page.
function createPost() {
	let post = document.createElement("div");
	post.classList.add("blogpost");

	post.innerHTML = `<h2 class="title">Blog Post Title</h2>
    <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolorem magni numquam dolor quod ea sequi eligendi sit, explicabo, enim rerum a maxime blanditiis? Perferendis tenetur vel autem consequatur officia.</p>
    <div class="userinfo">
        <img src="https://images.unsplash.com/photo-1611095970111-fc87b5315dc3?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw4OHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="">
        <span>Lea Taylor</span>
    </div>`;

	//appending to container
	container.appendChild(post);
}
