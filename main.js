
window.onload = function(){

	let topic = pickTopic();
	let content = pickContent(topic);
	console.log(topic.name);
	console.log(content.name);

	let title = this.document.getElementById('title');
	title.innerHTML = content.name;
	let div = document.getElementById('c');
	div.innerHTML = content.html_content;
}

let topic_names = ["Prerequisite Knowledge", "Algorithmic complexity / Big-O / Asymptotic analysis", "Data Structures", "More Knowledge", "Trees", "Sorting", "Graphs", "Advanced Alg Types", "Design Patterns", "Maths and Theory", "Low Level, How things work",
"Papers", "Testing", "Strings", "System Design"];
let topics = {"Prerequisite Knowledge": {
	"name": "Prerequisite Knowledge",
	"content_titles": ["Learn language", "How computers process a program"],
	"content": {"Learn language": {
		"name": "Learn language",
		"html_content": 
		`Language Content`
	},"How computers process a program" : {
		"name": "How computers process a program",
		"html_content": 
		`<ul>
			<li>
				<a href="https://www.youtube.com/watch?v=XM4lGflQFvA" rel="nofollow">How CPU executes a program</a>
			</li>
			<li>
				<a href="https://youtu.be/1I5ZMmrOfnA" rel="nofollow">How computers calculate - ALU (video)</a>
			</li>
			<li>
				<a href="https://youtu.be/fpnE6UAfbtU" rel="nofollow">Registers and RAM (video)</a>
			</li>
			<li>
				<a href="https://youtu.be/FZGugFqdr60" rel="nofollow">The Central Processing Unit (CPU) (video)</a>
			</li>
			<li>
				<a href="https://youtu.be/zltgXvg6r3k" rel="nofollow">Instructions and Programs (video)</a>
			</li>
		</ul>`
	}},
},
"Algorithmic complexity / Big-O / Asymptotic analysis": {
	"name": "Algorithmic complexity / Big-O / Asymptotic analysis",
	"content_titles": ["Algorithmic complexity / Big-O / Asymptotic analysis"],
	"content": {"Algorithmic complexity / Big-O / Asymptotic analysis": {
		"name": "Algorithmic complexity / Big-O / Asymptotic analysis",
		"html_content": 
		`<ul class="contains-task-list">
		<li>
		<p>nothing to implement</p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=iOq5kSKqeR4" rel="nofollow">Harvard CS50 - Asymptotic Notation (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=V6mKVRU1evU" rel="nofollow">Big O Notations (general quick tutorial) (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=ei-A_wy5Yxw&amp;index=2&amp;list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN" rel="nofollow">Big O Notation (and Omega and Theta) - best mathematical explanation (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Skiena:</p>
		<ul>
		<li><a href="https://www.youtube.com/watch?v=gSyDMtdPNpU&amp;index=2&amp;list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b" rel="nofollow">video</a></li>
		<li><a href="http://www3.cs.stonybrook.edu/~algorith/video-lectures/2007/lecture2.pdf" rel="nofollow">slides</a></li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://discrete.gr/complexity/" rel="nofollow">A Gentle Introduction to Algorithm Complexity Analysis</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://class.coursera.org/algorithmicthink1-004/lecture/59" rel="nofollow">Orders of Growth (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://class.coursera.org/algorithmicthink1-004/lecture/61" rel="nofollow">Asymptotics (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/ucberkeley_webcast_VIS4YDpuP98" rel="nofollow">UC Berkeley Big O (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/ucberkeley_webcast_ca3e7UVmeUc" rel="nofollow">UC Berkeley Big Omega (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=B3SpQZaAZP4&amp;index=10&amp;list=PL1BaGV1cIH4UhkL8a9bJGG356covJ76qN" rel="nofollow">Amortized Analysis (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://class.coursera.org/algorithmicthink1-004/lecture/63" rel="nofollow">Illustrating "Big O" (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> TopCoder (includes recurrence relations and master theorem):</p>
		<ul>
		<li><a href="https://www.topcoder.com/community/competitive-programming/tutorials/computational-complexity-section-1/" rel="nofollow">Computational Complexity: Section 1</a></li>
		<li><a href="https://www.topcoder.com/community/competitive-programming/tutorials/computational-complexity-section-2/" rel="nofollow">Computational Complexity: Section 2</a></li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://bigocheatsheet.com/" rel="nofollow">Cheat sheet</a></p>
		<p>If some of the lectures are too mathy, you can jump down to the bottom and
		watch the discrete mathematics videos to get the background knowledge.</p>
		</li>
		</ul>`
	},},
},
"Data Structures": {
	"name": "Data Structures",
	"content_titles": ["Arrays", "Linked Lists", "Stack", "Queue", "Hash table"],
	"content": {"Arrays": {
		"name": "Arrays",
		"html_content": 
		`<ul class="contains-task-list">
		<li>Implement an automatically resizing vector.</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Description:
		<ul>
		<li><a href="https://www.coursera.org/learn/data-structures/lecture/OsBSF/arrays" rel="nofollow">Arrays (video)</a></li>
		<li><a href="https://archive.org/details/ucberkeley_webcast_Wp8oiO_CZZE" rel="nofollow">UC Berkeley CS61B - Linear and Multi-Dim Arrays (video)</a> (Start watching from 15m 32s)</li>
		<li><a href="https://archive.org/details/0102WhatYouShouldKnow/02_04-basicArrays.mp4" rel="nofollow">Basic Arrays (video)</a></li>
		<li><a href="https://archive.org/details/0102WhatYouShouldKnow/02_05-multidimensionalArrays.mp4" rel="nofollow">Multi-dim (video)</a></li>
		<li><a href="https://www.coursera.org/learn/data-structures/lecture/EwbnV/dynamic-arrays" rel="nofollow">Dynamic Arrays (video)</a></li>
		<li><a href="https://www.youtube.com/watch?v=1jtrQqYpt7g" rel="nofollow">Jagged Arrays (video)</a></li>
		<li><a href="https://archive.org/details/0102WhatYouShouldKnow/02_06-jaggedArrays.mp4" rel="nofollow">Jagged Arrays (video)</a></li>
		<li><a href="https://archive.org/details/0102WhatYouShouldKnow/03_01-resizableArrays.mp4" rel="nofollow">Resizing arrays (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Implement a vector (mutable array with automatic resizing):
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Practice coding using arrays and pointers, and pointer math to jump to an index instead of using indexing.</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> new raw data array with allocated memory
		<ul>
		<li>can allocate int array under the hood, just not use its features</li>
		<li>start with 16, or if starting number is greater, use power of 2 - 16, 32, 64, 128</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> size() - number of items</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> capacity() - number of items it can hold</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> is_empty()</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> at(index) - returns item at given index, blows up if index out of bounds</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> push(item)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> insert(index, item) - inserts item at index, shifts that index's value and trailing elements to the right</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> prepend(item) - can use insert above at index 0</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> pop() - remove from end, return value</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> delete(index) - delete item at index, shifting all trailing elements left</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> remove(item) - looks for value and removes index holding it (even if in multiple places)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> find(item) - looks for value and returns first index with that value, -1 if not found</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> resize(new_capacity) // private function
		<ul>
		<li>when you reach capacity, resize to double the size</li>
		<li>when popping an item, if size is 1/4 of capacity, resize to half</li>
		</ul>
		</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Time
		<ul>
		<li>O(1) to add/remove at end (amortized for allocations for more space), index, or update</li>
		<li>O(n) to insert/remove elsewhere</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Space
		<ul>
		<li>contiguous in memory, so proximity helps performance</li>
		<li>space needed = (array capacity, which is &gt;= n) * size of item, but even if 2n, still O(n)</li>
		</ul>`
	},
	"Linked Lists": {
		"name": "Linked Lists",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Description:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/kHhgK/singly-linked-lists" rel="nofollow">Singly Linked Lists (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/ucberkeley_webcast_htzJdKoEmO0" rel="nofollow">CS 61B - Linked Lists 1 (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/ucberkeley_webcast_-c4I3gFYe3w" rel="nofollow">CS 61B - Linked Lists 2 (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=QN6FPiD0Gzo" rel="nofollow">C Code (video)</a>
		- not the whole video, just portions about Node struct and memory allocation.</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Linked List vs Arrays:
		<ul>
		<li><a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/rjBs9/core-linked-lists-vs-arrays" rel="nofollow">Core Linked Lists Vs Arrays (video)</a></li>
		<li><a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/QUaUd/in-the-real-world-lists-vs-arrays" rel="nofollow">In The Real World Linked Lists Vs Arrays (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=YQs6IC-vgmo" rel="nofollow">why you should avoid linked lists (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Gotcha: you need pointer to pointer knowledge:
		(for when you pass a pointer to a function that may change the address where that pointer points)
		This page is just to get a grasp on ptr to ptr. I don't recommend this list traversal style. Readability and maintainability suffer due to cleverness.
		<ul>
		<li><a href="https://www.eskimo.com/~scs/cclass/int/sx8.html" rel="nofollow">Pointers to Pointers</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> implement (I did with tail pointer &amp; without):
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> size() - returns number of data elements in list</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> empty() - bool returns true if empty</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> value_at(index) - returns the value of the nth item (starting at 0 for first)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> push_front(value) - adds an item to the front of the list</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> pop_front() - remove front item and return its value</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> push_back(value) - adds an item at the end</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> pop_back() - removes end item and returns its value</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> front() - get value of front item</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> back() - get value of end item</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> insert(index, value) - insert value at index, so current item at that index is pointed to by new item at index</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> erase(index) - removes node at given index</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> value_n_from_end(n) - returns the value of the node at nth position from the end of the list</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> reverse() - reverses the list</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> remove_value(value) - removes the first item in the list with this value</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Doubly-linked List
		<ul>
		<li><a href="https://www.coursera.org/learn/data-structures/lecture/jpGKD/doubly-linked-lists" rel="nofollow">Description (video)</a></li>
		<li>No need to implement</li>
		</ul>`
	},
	"Stack": {
		"name": "Stack",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/UdKzQ/stacks" rel="nofollow">Stacks (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/0102WhatYouShouldKnow/05_01-usingStacksForLast-inFirst-out.mp4" rel="nofollow">Using Stacks Last-In First-Out (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Will not implement. Implementing with array is trivial.</li>
		</ul>`
	},
	"Queue": {
		"name": "Queue",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/0102WhatYouShouldKnow/05_03-usingQueuesForFirst-inFirst-out.mp4" rel="nofollow">Using Queues First-In First-Out(video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/lecture/data-structures/queues-EShpq" rel="nofollow">Queue (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://en.wikipedia.org/wiki/Circular_buffer" rel="nofollow">Circular buffer/FIFO</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/0102WhatYouShouldKnow/05_04-priorityQueuesAndDeques.mp4" rel="nofollow">Priority Queues (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Implement using linked-list, with tail pointer:
		<ul>
		<li>enqueue(value) - adds value at position at tail</li>
		<li>dequeue() - returns value and removes least recently added element (front)</li>
		<li>empty()</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Implement using fixed-sized array:
		<ul>
		<li>enqueue(value) - adds item at end of available storage</li>
		<li>dequeue() - returns value and removes least recently added element</li>
		<li>empty()</li>
		<li>full()</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Cost:
		<ul>
		<li>a bad implementation using linked list where you enqueue at head and dequeue at tail would be O(n)
		because you'd need the next to last element, causing a full traversal each dequeue</li>
		<li>enqueue: O(1) (amortized, linked list and array [probing])</li>
		<li>dequeue: O(1) (linked list and array)</li>
		<li>empty: O(1) (linked list and array)</li>
		</ul>`
	},
	"Hash table": {
		"name": "Hash table",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Videos:</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=0M_kIqhwbFo&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=8" rel="nofollow">Hashing with Chaining (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=BRO7mVIFt08&amp;index=9&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" rel="nofollow">Table Doubling, Karp-Rabin (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=rvdJDijO2Ro&amp;index=10&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" rel="nofollow">Open Addressing, Cryptographic Hashing (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=C4Kc8xzcA68" rel="nofollow">PyCon 2010: The Mighty Dictionary (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=z0lJ2k0sl1g&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=11" rel="nofollow">(Advanced) Randomization: Universal &amp; Perfect Hashing (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=N0COwN14gt0&amp;list=PL2B4EEwhKD-NbwZ4ezj7gyc_3yNrojKM9&amp;index=4" rel="nofollow">(Advanced) Perfect hashing (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Online Courses:</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/0102WhatYouShouldKnow/06_02-understandingHashFunctions.mp4" rel="nofollow">Understanding Hash Functions (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/0102WhatYouShouldKnow/06_03-usingHashTables.mp4" rel="nofollow">Using Hash Tables (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/0102WhatYouShouldKnow/06_04-supportingHashing.mp4" rel="nofollow">Supporting Hashing (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/0102WhatYouShouldKnow/06_05-languageSupportForHashTables.mp4" rel="nofollow">Language Support Hash Tables (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/m7UuP/core-hash-tables" rel="nofollow">Core Hash Tables (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/home/week/3" rel="nofollow">Data Structures (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/NYZZP/phone-book-problem" rel="nofollow">Phone Book Problem (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> distributed hash tables:
		<ul>
		<li><a href="https://www.coursera.org/learn/data-structures/lecture/DvaIb/instant-uploads-and-storage-optimization-in-dropbox" rel="nofollow">Instant Uploads And Storage Optimization In Dropbox (video)</a></li>
		<li><a href="https://www.coursera.org/learn/data-structures/lecture/tvH8H/distributed-hash-tables" rel="nofollow">Distributed Hash Tables (video)</a></li>
		</ul>
		</li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> implement with array using linear probing</p>
		<ul>
		<li>hash(k, m) - m is size of hash table</li>
		<li>add(key, value) - if key already exists, update value</li>
		<li>exists(key)</li>
		<li>get(key)</li>
		<li>remove(key)</li>
		</ul>`
	},},
},
"More Knowledge": {
	"name": "More Knowledge",
	"content_titles": ["Binary Search", "Bitwise operations"],
	"content": {"Binary Search": {
		"name": "Binary Search",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=D5SrAga1pno" rel="nofollow">Binary Search (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search" rel="nofollow">Binary Search (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.topcoder.com/community/competitive-programming/tutorials/binary-search/" rel="nofollow">detail</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Implement:
		<ul>
		<li>binary search (on sorted array of integers)</li>
		<li>binary search using recursion</li>
		</ul>
		</li>
		</ul>`
	},"Bitwise operations" : {
		"name": "Bitwise operations",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://github.com/jwasham/coding-interview-university/blob/master/extras/cheat%20sheets/bits-cheat-cheet.pdf">Bits cheat sheet</a> - you should know many of the powers of 2 from (2^1 to 2^16 and 2^32)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Get a really good understanding of manipulating bits with: &amp;, |, ^, ~, &gt;&gt;, &lt;&lt;
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://en.wikipedia.org/wiki/Word_(computer_architecture)" rel="nofollow">words</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Good intro:
		<a href="https://www.youtube.com/watch?v=7jkIUgLC29I" rel="nofollow">Bit Manipulation (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=d0AwjSpNXR0" rel="nofollow">C Programming Tutorial 2-10: Bitwise Operators (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://en.wikipedia.org/wiki/Bit_manipulation" rel="nofollow">Bit Manipulation</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://en.wikipedia.org/wiki/Bitwise_operation" rel="nofollow">Bitwise Operation</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://graphics.stanford.edu/~seander/bithacks.html" rel="nofollow">Bithacks</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://bits.stephan-brumme.com/" rel="nofollow">The Bit Twiddler</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://bits.stephan-brumme.com/interactive.html" rel="nofollow">The Bit Twiddler Interactive</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 2s and 1s complement
		<ul>
		<li><a href="https://www.youtube.com/watch?v=lKTsv6iVxV4" rel="nofollow">Binary: Plusses &amp; Minuses (Why We Use Two's Complement) (video)</a></li>
		<li><a href="https://en.wikipedia.org/wiki/Ones%27_complement" rel="nofollow">1s Complement</a></li>
		<li><a href="https://en.wikipedia.org/wiki/Two%27s_complement" rel="nofollow">2s Complement</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> count set bits
		<ul>
		<li><a href="https://youtu.be/Hzuzo9NJrlc" rel="nofollow">4 ways to count bits in a byte (video)</a></li>
		<li><a href="https://graphics.stanford.edu/~seander/bithacks.html#CountBitsSetKernighan" rel="nofollow">Count Bits</a></li>
		<li><a href="http://stackoverflow.com/questions/109023/how-to-count-the-number-of-set-bits-in-a-32-bit-integer" rel="nofollow">How To Count The Number Of Set Bits In a 32 Bit Integer</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> round to next power of 2:
		<ul>
		<li><a href="https://bits.stephan-brumme.com/roundUpToNextPowerOfTwo.html" rel="nofollow">Round Up To Next Power Of Two</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> swap values:
		<ul>
		<li><a href="https://bits.stephan-brumme.com/swap.html" rel="nofollow">Swap</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> absolute value:
		<ul>
		<li><a href="https://bits.stephan-brumme.com/absInteger.html" rel="nofollow">Absolute Integer</a></li>
		</ul>
		</li>
		</ul>`
	}},
},"Trees": {
	"name": "Trees",
	"content_titles": ["Trees - Background", "Binary Search Trees (BSTs)", "Heaps"],
	"content": {"Trees - Background": {
		"name": "Trees - Background",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/ovovP/core-trees" rel="nofollow">Series: Core Trees (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/95qda/trees" rel="nofollow">Series: Trees (video)</a></li>
		<li>basic tree construction</li>
		<li>traversal</li>
		<li>manipulation algorithms</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=uWL6FJhq5fM" rel="nofollow">BFS(breadth-first search) and DFS(depth-first search)</a>
		<ul>
		<li>BFS notes:
		<ul>
		<li>level order (BFS, using queue)</li>
		<li>time complexity: O(n)</li>
		<li>space complexity: best: O(1), worst: O(n/2)=O(n)</li>
		</ul>
		</li>
		<li>DFS notes:
		<ul>
		<li>time complexity: O(n)</li>
		<li>space complexity:
		best: O(log n) - avg. height of tree
		worst: O(n)</li>
		<li>inorder (DFS: left, self, right)</li>
		<li>postorder (DFS: left, right, self)</li>
		<li>preorder (DFS: self, left, right)</li>
		</ul>
		</li>
		</ul>`
	},"Binary Search Trees (BSTs)" : {
		"name": "Binary Search Trees (BSTs)",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=x6At0nzX92o&amp;index=1&amp;list=PLA5Lqm4uh9Bbq-E0ZnqTIa8LRaL77ica6" rel="nofollow">Binary Search Tree Review (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/p82sw/core-introduction-to-binary-search-trees" rel="nofollow">Series (video)</a>
		<ul>
		<li>starts with symbol table and goes through BST applications</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/E7cXP/introduction" rel="nofollow">Introduction (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=9Jry5-82I68" rel="nofollow">MIT (video)</a></li>
		<li>C/C++:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=COZK7NATh4k&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&amp;index=28" rel="nofollow">Binary search tree - Implementation in C/C++ (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=hWokyBoo0aI&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&amp;index=29" rel="nofollow">BST implementation - memory allocation in stack and heap (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=Ut90klNN264&amp;index=30&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P" rel="nofollow">Find min and max element in a binary search tree (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=_pnqMz5nrRs&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&amp;index=31" rel="nofollow">Find height of a binary tree (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=9RHO6jU--GU&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&amp;index=32" rel="nofollow">Binary tree traversal - breadth-first and depth-first strategies (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=86g8jAQug04&amp;index=33&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P" rel="nofollow">Binary tree: Level Order Traversal (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=gm8DUJJhmY4&amp;index=34&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P" rel="nofollow">Binary tree traversal: Preorder, Inorder, Postorder (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=yEwSGhSsT0U&amp;index=35&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P" rel="nofollow">Check if a binary tree is binary search tree or not (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=gcULXE7ViZw&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P&amp;index=36" rel="nofollow">Delete a node from Binary Search Tree (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=5cPbNCrdotA&amp;index=37&amp;list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P" rel="nofollow">Inorder Successor in a binary search tree (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Implement:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> insert    // insert value into tree</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> get_node_count // get count of values stored</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> print_values // prints the values in the tree, from min to max</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> delete_tree</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> is_in_tree // returns true if given value exists in the tree</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> get_height // returns the height in nodes (single node's height is 1)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> get_min   // returns the minimum value stored in the tree</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> get_max   // returns the maximum value stored in the tree</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> is_binary_search_tree</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> delete_value</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> get_successor // returns next-highest value in tree after given value, -1 if none</li>
		</ul>
		</li>
		</ul>`
	},"Heaps": {
		"name": "Heaps",
		"html_content": 
		`<ul class="contains-task-list">
		<li>visualized as a tree, but is usually linear in storage (array, linked list)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://en.wikipedia.org/wiki/Heap_(data_structure)" rel="nofollow">Heap</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/2OpTs/introduction" rel="nofollow">Introduction (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/z3l9N/naive-implementations" rel="nofollow">Naive Implementations (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/GRV2q/binary-trees" rel="nofollow">Binary Trees (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/supplement/S5xxz/tree-height-remark" rel="nofollow">Tree Height Remark (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/0g1dl/basic-operations" rel="nofollow">Basic Operations (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/gl5Ni/complete-binary-trees" rel="nofollow">Complete Binary Trees (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/HxQo9/pseudocode" rel="nofollow">Pseudocode (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://youtu.be/odNJmw5TOEE?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;t=3291" rel="nofollow">Heap Sort - jumps to start (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/hSzMO/heap-sort" rel="nofollow">Heap Sort (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/dwrOS/building-a-heap" rel="nofollow">Building a heap (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=B7hVxCmfPtM&amp;index=4&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" rel="nofollow">MIT: Heaps and Heap Sort (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/ucberkeley_webcast_yIUFT6AKBGE" rel="nofollow">CS 61B Lecture 24: Priority Queues (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=MiyLo8adrWw" rel="nofollow">Linear Time BuildHeap (max-heap)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Implement a max-heap:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> insert</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> sift_up - needed for insert</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> get_max - returns the max item, without removing it</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> get_size() - return number of elements stored</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> is_empty() - returns true if heap contains no elements</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> extract_max - returns the max item, removing it</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> sift_down - needed for extract_max</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> remove(i) - removes item at index x</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> heapify - create a heap from an array of elements, needed for heap_sort</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> heap_sort() - take an unsorted array and turn it into a sorted array in-place using a max heap
		<ul>
		<li>note: using a min heap instead would save operations, but double the space needed (cannot do in-place).</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>`
	},},
},"Sorting": {
	"name": "Sorting",
	"content_titles": ["Sorting"],
	"content": {"Sorting": {
		"name": "Sorting",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Notes:</p>
		<ul class="contains-task-list">
		<li>Implement sorts &amp; know best case/worst case, average complexity of each:
		<ul>
		<li>no bubble sort - it's terrible - O(n^2), except when n &lt;= 16</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> stability in sorting algorithms ("Is Quicksort stable?")
		<ul>
		<li><a href="https://en.wikipedia.org/wiki/Sorting_algorithm#Stability" rel="nofollow">Sorting Algorithm Stability</a></li>
		<li><a href="http://stackoverflow.com/questions/1517793/stability-in-sorting-algorithms" rel="nofollow">Stability In Sorting Algorithms</a></li>
		<li><a href="http://www.geeksforgeeks.org/stability-in-sorting-algorithms/" rel="nofollow">Stability In Sorting Algorithms</a></li>
		<li><a href="http://homepages.math.uic.edu/~leon/cs-mcs401-s08/handouts/stability.pdf" rel="nofollow">Sorting Algorithms - Stability</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Which algorithms can be used on linked lists? Which on arrays? Which on both?
		<ul>
		<li>I wouldn't recommend sorting a linked list, but merge sort is doable.</li>
		<li><a href="http://www.geeksforgeeks.org/merge-sort-for-linked-list/" rel="nofollow">Merge Sort For Linked List</a></li>
		</ul>
		</li>
		</ul>
		</li>
		<li>
		<p>For heapsort, see Heap data structure above. Heap sort is great, but not stable.</p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/home/week/3" rel="nofollow">Sedgewick - Mergesort (5 videos)</a></p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/lecture/ARWDq/mergesort" rel="nofollow">1. Mergesort</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/lecture/PWNEl/bottom-up-mergesort" rel="nofollow">2. Bottom up Mergesort</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/lecture/xAltF/sorting-complexity" rel="nofollow">3. Sorting Complexity</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/lecture/9FYhS/comparators" rel="nofollow">4. Comparators</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/lecture/pvvLZ/stability" rel="nofollow">5. Stability</a></li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/home/week/3" rel="nofollow">Sedgewick - Quicksort (4 videos)</a></p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/lecture/vjvnC/quicksort" rel="nofollow">1. Quicksort</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/lecture/UQxFT/selection" rel="nofollow">2. Selection</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/lecture/XvjPd/duplicate-keys" rel="nofollow">3. Duplicate Keys</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part1/lecture/QBNZ7/system-sorts" rel="nofollow">4. System Sorts</a></li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> UC Berkeley:</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/ucberkeley_webcast_EiUvYS2DT6I" rel="nofollow">CS 61B Lecture 29: Sorting I (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/ucberkeley_webcast_2hTY3t80Qsk" rel="nofollow">CS 61B Lecture 30: Sorting II (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/ucberkeley_webcast_Y6LOLpxg6Dc" rel="nofollow">CS 61B Lecture 32: Sorting III (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/ucberkeley_webcast_qNMQ4ly43p4" rel="nofollow">CS 61B Lecture 33: Sorting V (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=P00xJgWzz2c&amp;index=1&amp;list=PL89B61F78B552C1AB" rel="nofollow">Bubble Sort (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=ni_zk257Nqo&amp;index=7&amp;list=PL89B61F78B552C1AB" rel="nofollow">Analyzing Bubble Sort (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=Kg4bqzAqRBM&amp;index=3&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" rel="nofollow">Insertion Sort, Merge Sort (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=c4BRHC7kTaQ&amp;index=2&amp;list=PL89B61F78B552C1AB" rel="nofollow">Insertion Sort (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=GCae1WNvnZM&amp;index=3&amp;list=PL89B61F78B552C1AB" rel="nofollow">Merge Sort (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=y_G9BkAm6B8&amp;index=4&amp;list=PL89B61F78B552C1AB" rel="nofollow">Quicksort (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=6nDMgr0-Yyo&amp;index=8&amp;list=PL89B61F78B552C1AB" rel="nofollow">Selection Sort (video)</a></p>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Merge sort code:</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.cs.yale.edu/homes/aspnes/classes/223/examples/sorting/mergesort.c" rel="nofollow">Using output array (C)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://github.com/jwasham/practice-python/blob/master/merge_sort/merge_sort.py">Using output array (Python)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://github.com/jwasham/practice-cpp/blob/master/merge_sort/merge_sort.cc">In-place (C++)</a></li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Quick sort code:</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.cs.yale.edu/homes/aspnes/classes/223/examples/randomization/quick.c" rel="nofollow">Implementation (C)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://github.com/jwasham/practice-c/blob/master/quick_sort/quick_sort.c">Implementation (C)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://github.com/jwasham/practice-python/blob/master/quick_sort/quick_sort.py">Implementation (Python)</a></li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Implement:</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Mergesort: O(n log n) average and worst case</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Quicksort O(n log n) average case</li>
		<li>Selection sort and insertion sort are both O(n^2) average and worst case</li>
		<li>For heapsort, see Heap data structure above.</li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Not required, but I recommended them:</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/home/week/3" rel="nofollow">Sedgewick - Radix Sorts (6 videos)</a>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/vGHvb/strings-in-java" rel="nofollow">1. Strings in Java</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/2pi1Z/key-indexed-counting" rel="nofollow">2. Key Indexed Counting</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/c1U7L/lsd-radix-sort" rel="nofollow">3. Least Significant Digit First String Radix Sort</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/gFxwG/msd-radix-sort" rel="nofollow">4. Most Significant Digit First String Radix Sort</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/crkd5/3-way-radix-quicksort" rel="nofollow">5. 3 Way Radix Quicksort</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/TH18W/suffix-arrays" rel="nofollow">6. Suffix Arrays</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#radixSort" rel="nofollow">Radix Sort</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=xhr26ia4k38" rel="nofollow">Radix Sort (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=Nz1KZXbghj8&amp;index=7&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" rel="nofollow">Radix Sort, Counting Sort (linear time given constraints) (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=cNB2lADK3_s&amp;index=8&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp" rel="nofollow">Randomization: Matrix Multiply, Quicksort, Freivalds' algorithm (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=pOKy3RZbSws&amp;list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf&amp;index=14" rel="nofollow">Sorting in Linear Time (video)</a></li>
		</ul>
		</li>
		</ul>`
	}},
},
"Graphs": {
	"name": "Graphs",
	"content_titles": ["Graphs"],
	"content": {"Graphs": {
		"name": "Graphs",
		"html_content": 
		`<ul class="contains-task-list">
		<li>
		<p>Notes:</p>
		<ul>
		<li>There are 4 basic ways to represent a graph in memory:
		<ul>
		<li>objects and pointers</li>
		<li>adjacency matrix</li>
		<li>adjacency list</li>
		<li>adjacency map</li>
		</ul>
		</li>
		<li>Familiarize yourself with each representation and its pros &amp; cons</li>
		<li>BFS and DFS - know their computational complexity, their tradeoffs, and how to implement them in real code</li>
		<li>When asked a question, look for a graph-based solution first, then move on if none.</li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> MIT(videos):</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=s-CYnVz-uh4&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=13" rel="nofollow">Breadth-First Search</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> [Depth-First Search]((<a href="https://www.youtube.com/watch?v=AfSk24UTFS8&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=14" rel="nofollow">https://www.youtube.com/watch?v=AfSk24UTFS8&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=14</a>)</li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Skiena Lectures - great intro:</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=OiXxhDrFruw&amp;list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b&amp;index=11" rel="nofollow">CSE373 2012 - Lecture 11 - Graph Data Structures (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=g5vF8jscteo&amp;list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b&amp;index=12" rel="nofollow">CSE373 2012 - Lecture 12 - Breadth-First Search (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=S23W6eTcqdY&amp;list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b&amp;index=13" rel="nofollow">CSE373 2012 - Lecture 13 - Graph Algorithms (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=WitPBKGV0HY&amp;index=14&amp;list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b" rel="nofollow">CSE373 2012 - Lecture 14 - Graph Algorithms (con't) (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=ia1L30l7OIg&amp;index=15&amp;list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b" rel="nofollow">CSE373 2012 - Lecture 15 - Graph Algorithms (con't 2) (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=jgDOQq6iWy8&amp;index=16&amp;list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b" rel="nofollow">CSE373 2012 - Lecture 16 - Graph Algorithms (con't 3) (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item">
		<p><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Graphs (review and more):</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=Aa2sqUhIn-E&amp;index=15&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" rel="nofollow">6.006 Single-Source Shortest Paths Problem (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=2E7MmKv0Y24&amp;index=16&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb" rel="nofollow">6.006 Dijkstra (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=ozsuci5pIso&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=17" rel="nofollow">6.006 Bellman-Ford (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=CHvQ3q_gJ7E&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=18" rel="nofollow">6.006 Speeding Up Dijkstra (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=i_AQT_XfvD8&amp;index=6&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm" rel="nofollow">Aduni: Graph Algorithms I - Topological Sorting, Minimum Spanning Trees, Prim's Algorithm -  Lecture 6 (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=ufj5_bppBsA&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=7" rel="nofollow">Aduni: Graph Algorithms II - DFS, BFS, Kruskal's Algorithm, Union Find Data Structure - Lecture 7 (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=DiedsPsMKXc&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=8" rel="nofollow">Aduni: Graph Algorithms III: Shortest Path - Lecture 8 (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=XIAQRlNkJAw&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=9" rel="nofollow">Aduni: Graph Alg. IV: Intro to geometric algorithms - Lecture 9 (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <del><a href="https://youtu.be/dgjX4HdMI-Q?list=PL-XXv-cvA_iAlnI-BQr9hjqADPBtujFJd&amp;t=3489" rel="nofollow">CS 61B 2014 (starting at 58:09) (video)</a></del></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://archive.org/details/ucberkeley_webcast_zFbq8vOZ_0k" rel="nofollow">CS 61B 2014: Weighted graphs (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=tKwnms5iRBU&amp;index=16&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp" rel="nofollow">Greedy Algorithms: Minimum Spanning Tree (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=RpgcYiky7uw" rel="nofollow">Strongly Connected Components Kosaraju's Algorithm Graph Algorithm (video)</a></li>
		</ul>
		</li>
		<li>
		<p>Full Coursera Course:</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-on-graphs/home/welcome" rel="nofollow">Algorithms on Graphs (video)</a></li>
		</ul>
		</li>
		<li>
		<p>I'll implement:</p>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> DFS with adjacency list (recursive)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> DFS with adjacency list (iterative with stack)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> DFS with adjacency matrix (recursive)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> DFS with adjacency matrix (iterative with stack)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> BFS with adjacency list</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> BFS with adjacency matrix</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> single-source shortest path (Dijkstra)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> minimum spanning tree</li>
		<li>DFS-based algorithms (see Aduni videos above):
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> check for cycle (needed for topological sort, since we'll check for cycle before starting)</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> topological sort</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> count connected components in a graph</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> list strongly connected components</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> check for bipartite graph</li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>`
	}},
},
"Advanced Alg Types": {
	"name": "Advanced Alg Types",
	"content_titles": ["Recursion", "Dynamic Programming"],
	"content": {"Recursion": {
		"name": "Recursion",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Stanford lectures on recursion &amp; backtracking:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=gl3emqCuueQ&amp;list=PLFE6E58F856038C69&amp;index=8" rel="nofollow">Lecture 8 | Programming Abstractions (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=uFJhEPrbycQ&amp;list=PLFE6E58F856038C69&amp;index=9" rel="nofollow">Lecture 9 | Programming Abstractions (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=NdF1QDTRkck&amp;index=10&amp;list=PLFE6E58F856038C69" rel="nofollow">Lecture 10 | Programming Abstractions (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=p-gpaIGRCQI&amp;list=PLFE6E58F856038C69&amp;index=11" rel="nofollow">Lecture 11 | Programming Abstractions (video)</a></li>
		</ul>
		</li>
		<li>when it is appropriate to use it</li>
		<li>how is tail recursion better than not?
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.quora.com/What-is-tail-recursion-Why-is-it-so-bad" rel="nofollow">What Is Tail Recursion Why Is It So Bad?</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=L1jjXGfxozc" rel="nofollow">Tail Recursion (video)</a></li>
		</ul>
		</li>
		</ul>`
	},"Dynamic Programming" : {
		"name": "Dynamic Programming",
		"html_content": 
		`<ul class="contains-task-list">
		<li>This subject can be pretty difficult, as each DP soluble problem must be defined as a recursion relation, and coming up with it can be tricky.</li>
		<li>I suggest looking at many examples of DP problems until you have a solid understanding of the pattern involved.</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Videos:
		<ul class="contains-task-list">
		<li>the Skiena videos can be hard to follow since he sometimes uses the whiteboard, which is too small to see</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://youtu.be/Qc2ieXRgR0k?list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b&amp;t=1718" rel="nofollow">Skiena: CSE373 2012 - Lecture 19 - Introduction to Dynamic Programming (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://youtu.be/IsmMhMdyeGY?list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b&amp;t=2749" rel="nofollow">Skiena: CSE373 2012 - Lecture 20 - Edit Distance (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://youtu.be/o0V9eYF4UI8?list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b&amp;t=406" rel="nofollow">Skiena: CSE373 2012 - Lecture 21 - Dynamic Programming Examples (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=dRbMC1Ltl3A&amp;list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b&amp;index=22" rel="nofollow">Skiena: CSE373 2012 - Lecture 22 - Applications of Dynamic Programming (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://youtu.be/J5aJEcOr6Eo?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;t=3558" rel="nofollow">Simonson: Dynamic Programming 0 (starts at 59:18) (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=0EzHjQ_SOeU&amp;index=11&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm" rel="nofollow">Simonson: Dynamic Programming I - Lecture 11 (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=v1qiRwuJU7g&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=12" rel="nofollow">Simonson: Dynamic programming II - Lecture 12 (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> List of individual DP problems (each is short):
		<a href="https://www.youtube.com/playlist?list=PLrmLmBdmIlpsHaNTPP_jHHDx_os9ItYXr" rel="nofollow">Dynamic Programming (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Yale Lecture notes:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#dynamicProgramming" rel="nofollow">Dynamic Programming</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Coursera:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/80RrW/the-rna-secondary-structure-problem" rel="nofollow">The RNA secondary structure problem (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/PSonq/a-dynamic-programming-algorithm" rel="nofollow">A dynamic programming algorithm (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/oUEK2/illustrating-the-dp-algorithm" rel="nofollow">Illustrating the DP algorithm (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/nfK2r/running-time-of-the-dp-algorithm" rel="nofollow">Running time of the DP algorithm (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/M999a/dp-vs-recursive-implementation" rel="nofollow">DP vs. recursive implementation (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/UZ7o6/global-pairwise-sequence-alignment" rel="nofollow">Global pairwise sequence alignment (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithmic-thinking-2/lecture/WnNau/local-pairwise-sequence-alignment" rel="nofollow">Local pairwise sequence alignment (video)</a></li>
		</ul>
		</li>
		</ul>`
	}},
},
"Design Patterns": {
	"name": "Design Patterns",
	"content_titles": ["OOP", "Other Design Patterns"],
	"content": {"OOP": {
		"name": "OOP",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=OkC7HKtiZC0&amp;list=PLGLfVvz_LVvQ5G-LdJ8RLqe-ndo7QITYc" rel="nofollow">Optional: UML 2.0 Series (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Object-Oriented Software Engineering: Software Dev Using UML and Java (21 videos):
		<ul>
		<li>Can skip this if you have a great grasp of OO and OO design practices.</li>
		<li><a href="https://www.youtube.com/playlist?list=PLJ9pm_Rc9HesnkwKlal_buSIHA-jTZMpO" rel="nofollow">OOSE: Software Dev Using UML and Java</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> SOLID OOP Principles:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=TMuno5RZNeE" rel="nofollow">Bob Martin SOLID Principles of Object Oriented and Agile Design (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/playlist?list=PL4CE9F710017EA77A" rel="nofollow">SOLID Principles (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> S - <a href="http://www.oodesign.com/single-responsibility-principle.html" rel="nofollow">Single Responsibility Principle</a> | <a href="http://www.javacodegeeks.com/2011/11/solid-single-responsibility-principle.html" rel="nofollow">Single responsibility to each Object</a>
		<ul>
		<li><a href="https://docs.google.com/open?id=0ByOwmqah_nuGNHEtcU5OekdDMkk" rel="nofollow">more flavor</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> O - <a href="http://www.oodesign.com/open-close-principle.html" rel="nofollow">Open/Closed Principal</a>  | <a href="https://en.wikipedia.org/wiki/Open/closed_principle" rel="nofollow">On production level Objects are ready for extension but not for modification</a>
		<ul>
		<li><a href="http://docs.google.com/a/cleancoder.com/viewer?a=v&amp;pid=explorer&amp;chrome=true&amp;srcid=0BwhCYaYDn8EgN2M5MTkwM2EtNWFkZC00ZTI3LWFjZTUtNTFhZGZiYmUzODc1&amp;hl=en" rel="nofollow">more flavor</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> L - <a href="http://www.oodesign.com/liskov-s-substitution-principle.html" rel="nofollow">Liskov Substitution Principal</a> | <a href="http://stackoverflow.com/questions/56860/what-is-the-liskov-substitution-principle" rel="nofollow">Base Class and Derived class follow ‘IS A’ principal</a>
		<ul>
		<li><a href="http://docs.google.com/a/cleancoder.com/viewer?a=v&amp;pid=explorer&amp;chrome=true&amp;srcid=0BwhCYaYDn8EgNzAzZjA5ZmItNjU3NS00MzQ5LTkwYjMtMDJhNDU5ZTM0MTlh&amp;hl=en" rel="nofollow">more flavor</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> I - <a href="http://www.oodesign.com/interface-segregation-principle.html" rel="nofollow">Interface segregation principle</a> | clients should not be forced to implement interfaces they don't use
		<ul>
		<li><a href="https://www.youtube.com/watch?v=3CtAfl7aXAQ" rel="nofollow">Interface Segregation Principle in 5 minutes (video)</a></li>
		<li><a href="http://docs.google.com/a/cleancoder.com/viewer?a=v&amp;pid=explorer&amp;chrome=true&amp;srcid=0BwhCYaYDn8EgOTViYjJhYzMtMzYxMC00MzFjLWJjMzYtOGJiMDc5N2JkYmJi&amp;hl=en" rel="nofollow">more flavor</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> D -<a href="http://www.oodesign.com/dependency-inversion-principle.html" rel="nofollow">Dependency Inversion principle</a> | Reduce the dependency In composition of objects.
		<ul>
		<li><a href="http://stackoverflow.com/questions/62539/what-is-the-dependency-inversion-principle-and-why-is-it-important" rel="nofollow">Why Is The Dependency Inversion Principle And Why Is It Important</a></li>
		<li><a href="http://docs.google.com/a/cleancoder.com/viewer?a=v&amp;pid=explorer&amp;chrome=true&amp;srcid=0BwhCYaYDn8EgMjdlMWIzNGUtZTQ0NC00ZjQ5LTkwYzQtZjRhMDRlNTQ3ZGMz&amp;hl=en" rel="nofollow">more flavor</a></li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>`
	},"Other Design Patterns" : {
		"name": "Other Design Patterns",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=3cmzqZzwNDM&amp;list=PLGLfVvz_LVvQ5G-LdJ8RLqe-ndo7QITYc&amp;index=3" rel="nofollow">Quick UML review (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Learn these patterns:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> strategy</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> singleton</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> adapter</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> prototype</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> decorator</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> visitor</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> factory, abstract factory</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> facade</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> observer</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> proxy</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> delegate</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> command</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> state</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> memento</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> iterator</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> composite</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> flyweight</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://youtu.be/LAP2A80Ajrg?list=PLJ9pm_Rc9HesnkwKlal_buSIHA-jTZMpO&amp;t=3344" rel="nofollow">Chapter 6 (Part 1) - Patterns (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=U8-PGsjvZc4&amp;index=12&amp;list=PLJ9pm_Rc9HesnkwKlal_buSIHA-jTZMpO" rel="nofollow">Chapter 6 (Part 2) - Abstraction-Occurrence, General Hierarchy, Player-Role, Singleton, Observer, Delegation (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=7sduBHuex4c&amp;index=13&amp;list=PLJ9pm_Rc9HesnkwKlal_buSIHA-jTZMpO" rel="nofollow">Chapter 6 (Part 3) - Adapter, Facade, Immutable, Read-Only Interface, Proxy (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/playlist?list=PLF206E906175C7E07" rel="nofollow">Series of videos (27 videos)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.amazon.com/Head-First-Design-Patterns-Freeman/dp/0596007124" rel="nofollow">Head First Design Patterns</a>
		<ul>
		<li>I know the canonical book is "Design Patterns: Elements of Reusable Object-Oriented Software", but Head First is great for beginners to OO.</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://sourcemaking.com/design-patterns-and-tips" rel="nofollow">Handy reference: 101 Design Patterns &amp; Tips for Developers</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://github.com/kamranahmedse/design-patterns-for-humans#structural-design-patterns">Design patterns for humans</a></li>
		</ul>`
	}},
},
"Maths and Theory": {
	"name": "Maths and Theory",
	"content_titles": ["Combinatorics", "NP Completeness"],
	"content": {"Combinatorics": {
		"name": "Combinatorics",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=8RRo6Ti9d0U" rel="nofollow">Math Skills: How to find Factorial, Permutation and Combination (Choose) (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=sZkAAk9Wwa4" rel="nofollow">Make School: Probability (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=dNaJg-mLobQ" rel="nofollow">Make School: More Probability and Markov Chains (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Khan Academy:
		<ul>
		<li>Course layout:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.khanacademy.org/math/probability/probability-and-combinatorics-topic" rel="nofollow">Basic Theoretical Probability</a></li>
		</ul>
		</li>
		<li>Just the videos - 41 (each are simple and each are short):
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=uzkc-qNVoOk&amp;list=PLC58778F28211FA19" rel="nofollow">Probability Explained (video)</a></li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>`
	},"NP Completeness" : {
		"name": "NP Completeness",
		"html_content": 
		`<ul class="contains-task-list">
		<li>Know about the most famous classes of NP-complete problems, such as traveling salesman and the knapsack problem,
		and be able to recognize them when an interviewer asks you them in disguise.</li>
		<li>Know what NP-complete means.</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=moPtwq_cVH8&amp;list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb&amp;index=23" rel="nofollow">Computational Complexity (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Simonson:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://youtu.be/qcGnJ47Smlo?list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;t=2939" rel="nofollow">Greedy Algs. II &amp; Intro to NP Completeness (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=e0tGC6ZQdQE&amp;index=16&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm" rel="nofollow">NP Completeness II &amp; Reductions (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=fCX1BGT3wjE&amp;index=17&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm" rel="nofollow">NP Completeness III (Video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=NKLDp3Rch3M&amp;list=PLFDnELG9dpVxQCxuD-9BSy2E7BWY3t5Sm&amp;index=18" rel="nofollow">NP Completeness IV (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Skiena:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://youtu.be/KiK5TVgXbFg?list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b&amp;t=1508" rel="nofollow">CSE373 2012 - Lecture 23 - Introduction to NP-Completeness (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=27Al52X3hd4&amp;index=24&amp;list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b" rel="nofollow">CSE373 2012 - Lecture 24 - NP-Completeness Proofs (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=xCPH4gwIIXM&amp;index=25&amp;list=PLOtl7M3yp-DV69F32zdK7YJcNXpTunF2b" rel="nofollow">CSE373 2012 - Lecture 25 - NP-Completeness Challenge (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=eHZifpgyH_4&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=22" rel="nofollow">Complexity: P, NP, NP-completeness, Reductions (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=MEz1J9wY2iM&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp&amp;index=24" rel="nofollow">Complexity: Approximation Algorithms (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=4q-jmGrmxKs&amp;index=25&amp;list=PLUl4u3cNGP6317WaSNfmCvGym2ucw3oGp" rel="nofollow">Complexity: Fixed-Parameter Algorithms (video)</a></li>
		<li>Peter Norvig discusses near-optimal solutions to traveling salesman problem:
		<ul>
		<li><a href="http://nbviewer.jupyter.org/url/norvig.com/ipython/TSP.ipynb" rel="nofollow">Jupyter Notebook</a></li>
		</ul>
		</li>
		<li>Pages 1048 - 1140 in CLRS if you have it.</li>
		</ul>`
	}},
},
"Low Level, How things work": {
	"name": "Low Level, How things work",
	"content_titles": ["Cache", "Processes and Threads", "Endianness", "Networking"],
	"content": {"Cache": {
		"name": "Cache",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> LRU cache:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=R5ON3iwx78M" rel="nofollow">The Magic of LRU Cache (100 Days of Google Dev) (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=bq6N7Ym81iI" rel="nofollow">Implementing LRU (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=8-FZRAjR7qU" rel="nofollow">LeetCode - 146 LRU Cache (C++) (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> CPU cache:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=vjYF_fAZI5E&amp;list=PLrRW1w6CGAcXbMtDFj205vALOGmiRc82-&amp;index=24" rel="nofollow">MIT 6.004 L15: The Memory Hierarchy (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=ajgC3-pyGlk&amp;index=25&amp;list=PLrRW1w6CGAcXbMtDFj205vALOGmiRc82-" rel="nofollow">MIT 6.004 L16: Cache Issues (video)</a></li>
		</ul>
		</li>
		</ul>`
	},"Processes and Threads" : {
		"name": "Processes and Threads",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Computer Science 162 - Operating Systems (25 videos):
		<ul>
		<li>for processes and threads see videos 1-11</li>
		<li><a href="https://archive.org/details/ucberkeley-webcast-PL-XXv-cvA_iBDyz-ba4yDskqMDY6A1w_c" rel="nofollow">Operating Systems and System Programming (video)</a></li>
		</ul>
		</li>
		<li><a href="https://www.quora.com/What-is-the-difference-between-a-process-and-a-thread" rel="nofollow">What Is The Difference Between A Process And A Thread?</a></li>
		<li>Covers:
		<ul>
		<li>Processes, Threads, Concurrency issues
		<ul>
		<li>difference between processes and threads</li>
		<li>processes</li>
		<li>threads</li>
		<li>locks</li>
		<li>mutexes</li>
		<li>semaphores</li>
		<li>monitors</li>
		<li>how they work</li>
		<li>deadlock</li>
		<li>livelock</li>
		</ul>
		</li>
		<li>CPU activity, interrupts, context switching</li>
		<li>Modern concurrency constructs with multicore processors</li>
		<li><a href="https://www.youtube.com/watch?v=LKe7xK0bF7o&amp;list=PLCiOXwirraUCBE9i_ukL8_Kfg6XNv7Se8&amp;index=2" rel="nofollow">Paging, segmentation and virtual memory (video)</a></li>
		<li><a href="https://www.youtube.com/watch?v=uFKi2-J-6II&amp;list=PLCiOXwirraUCBE9i_ukL8_Kfg6XNv7Se8&amp;index=3" rel="nofollow">Interrupts (video)</a></li>
		<li><a href="https://www.youtube.com/watch?v=-Gu5mYdKbu4&amp;index=4&amp;list=PLCiOXwirraUCBE9i_ukL8_Kfg6XNv7Se8" rel="nofollow">Scheduling (video)</a></li>
		<li>Process resource needs (memory: code, static storage, stack, heap, and also file descriptors, i/o)</li>
		<li>Thread resource needs (shares above (minus stack) with other threads in the same process but each has its own pc, stack counter, registers, and stack)</li>
		<li>Forking is really copy on write (read-only) until the new process writes to memory, then it does a full copy.</li>
		<li>Context switching
		<ul>
		<li>How context switching is initiated by the operating system and underlying hardware</li>
		</ul>
		</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/playlist?list=PL5jc9xFGsL8E12so1wlMS0r0hTQoJL74M" rel="nofollow">threads in C++ (series - 10 videos)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> concurrency in Python (videos):
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/playlist?list=PL1H1sBF1VAKVMONJWJkmUh6_p8g4F2oy1" rel="nofollow">Short series on threads</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=Bs7vPNbB9JM" rel="nofollow">Python Threads</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=Obt-vMVdM8s" rel="nofollow">Understanding the Python GIL (2010)</a>
		<ul>
		<li><a href="http://www.dabeaz.com/GIL" rel="nofollow">reference</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=MCs5OvhV9S4" rel="nofollow">David Beazley - Python Concurrency From the Ground Up: LIVE! - PyCon 2015</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=ZzfHjytDceU" rel="nofollow">Keynote David Beazley - Topics of Interest (Python Asyncio)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=0zaPs8OtyKY" rel="nofollow">Mutex in Python</a></li>
		</ul>
		</li>
		</ul>`
	},"Endianness": {
		"name": "Endianness",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.cs.umd.edu/class/sum2003/cmsc311/Notes/Data/endian.html" rel="nofollow">Big And Little Endian</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=JrNF0KRAlyo" rel="nofollow">Big Endian Vs Little Endian (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=oBSuXP-1Tc0" rel="nofollow">Big And Little Endian Inside/Out (video)</a>
		<ul>
		<li>Very technical talk for kernel devs. Don't worry if most is over your head.</li>
		<li>The first half is enough.</li>
		</ul>
		</li>
		</ul>`
	},"Networking": {
		"name": "Networking",
		"html_content": 
		`<ul class="contains-task-list">
		<li><strong>if you have networking experience or want to be a reliability engineer or operations engineer, expect questions</strong></li>
		<li>otherwise, this is just good to know</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.khanacademy.org/computing/computer-science/internet-intro" rel="nofollow">Khan Academy</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=Vdc8TCESIg8" rel="nofollow">UDP and TCP: Comparison of Transport Protocols</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=e5DEVa9eSN0" rel="nofollow">TCP/IP and the OSI Model Explained!</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=nomyRJehhnM" rel="nofollow">Packet Transmission across the Internet. Networking &amp; TCP/IP tutorial.</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=WGJrLqtX7As" rel="nofollow">HTTP</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=S2iBR2ZlZf0" rel="nofollow">SSL and HTTPS</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=Rp3iZUvXWlM" rel="nofollow">SSL/TLS</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=E9FxNzv1Tr8" rel="nofollow">HTTP 2.0</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/playlist?list=PLEbnTDJUr_IegfoqO4iPnPYQui46QqT0j" rel="nofollow">Video Series (21 videos)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=t5xYI0jzOf4" rel="nofollow">Subnetting Demystified - Part 5 CIDR Notation</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Sockets:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=6G_W54zuadg&amp;t=6s" rel="nofollow">Java - Sockets - Introduction (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=G75vN2mnJeQ" rel="nofollow">Socket Programming (video)</a></li>
		</ul>
		</li>
		</ul>`
	},},
},
"Papers": {
	"name": "Papers",
	"content_titles": ["Read a Paper"],
	"content": {"Read a Paper": {
		"name": "Read a Paper",
		"html_content": 
		`<ul class="contains-task-list">
		<li>Reading all from end to end with full comprehension will likely take more time than you have. I recommend being selective on papers and their sections.</li>
		<li><a href="https://www.cs.cmu.edu/~crary/819-f09/" rel="nofollow">Love classic papers?</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://spinroot.com/courses/summer/Papers/hoare_1978.pdf" rel="nofollow">1978: Communicating Sequential Processes</a>
		<ul>
		<li><a href="https://godoc.org/github.com/thomas11/csp" rel="nofollow">implemented in Go</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://static.googleusercontent.com/media/research.google.com/en//archive/gfs-sosp2003.pdf" rel="nofollow">2003: The Google File System</a>
		<ul>
		<li>replaced by Colossus in 2012</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://static.googleusercontent.com/media/research.google.com/en//archive/mapreduce-osdi04.pdf" rel="nofollow">2004: MapReduce: Simplified Data Processing on Large Clusters</a>
		<ul>
		<li>mostly replaced by Cloud Dataflow?</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://static.googleusercontent.com/media/research.google.com/en//archive/bigtable-osdi06.pdf" rel="nofollow">2006: Bigtable: A Distributed Storage System for Structured Data</a>
		<ul>
		<li><a href="https://cloud.google.com/files/BigQueryTechnicalWP.pdf" rel="nofollow">An Inside Look at Google BigQuery</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://research.google.com/archive/chubby-osdi06.pdf" rel="nofollow">2006: The Chubby Lock Service for Loosely-Coupled Distributed Systems</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://s3.amazonaws.com/AllThingsDistributed/sosp/amazon-dynamo-sosp2007.pdf" rel="nofollow">2007: Dynamo: Amazon’s Highly Available Key-value Store</a>
		<ul>
		<li>The Dynamo paper kicked off the NoSQL revolution</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.akkadia.org/drepper/cpumemory.pdf" rel="nofollow">2007: What Every Programmer Should Know About Memory (very long, and the author encourages skipping of some sections)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://research.google.com/pubs/archive/36356.pdf" rel="nofollow">2010: Dapper, a Large-Scale Distributed Systems Tracing Infrastructure</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/36632.pdf" rel="nofollow">2010: Dremel: Interactive Analysis of Web-Scale Datasets</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.wired.com/2012/07/google-colossus/" rel="nofollow">2012: Google's Colossus</a>
		<ul>
		<li>paper not available</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 2012: AddressSanitizer: A Fast Address Sanity Checker:
		<ul>
		<li><a href="http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/37752.pdf" rel="nofollow">paper</a></li>
		<li><a href="https://www.usenix.org/conference/atc12/technical-sessions/presentation/serebryany" rel="nofollow">video</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 2013: Spanner: Google’s Globally-Distributed Database:
		<ul>
		<li><a href="http://static.googleusercontent.com/media/research.google.com/en//archive/spanner-osdi2012.pdf" rel="nofollow">paper</a></li>
		<li><a href="https://www.usenix.org/node/170855" rel="nofollow">video</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43146.pdf" rel="nofollow">2014: Machine Learning: The High-Interest Credit Card of Technical Debt</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43790.pdf" rel="nofollow">2015: Continuous Pipelines at Google</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44686.pdf" rel="nofollow">2015: High-Availability at Massive Scale: Building Google’s Data Infrastructure for Ads</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://download.tensorflow.org/paper/whitepaper2015.pdf" rel="nofollow">2015: TensorFlow: Large-Scale Machine Learning on Heterogeneous Distributed Systems</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/43835.pdf" rel="nofollow">2015: How Developers Search for Code: A Case Study</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://static.googleusercontent.com/media/research.google.com/en//pubs/archive/44843.pdf" rel="nofollow">2016: Borg, Omega, and Kubernetes</a></li>
		</ul>`
	}},
},
"Testing": {
	"name": "Testing",
	"content_titles": ["Testing"],
	"content": {"Testing": {
		"name": "Testing",
		"html_content": 
		`<ul class="contains-task-list">
		<li>To cover:
		<ul>
		<li>how unit testing works</li>
		<li>what are mock objects</li>
		<li>what is integration testing</li>
		<li>what is dependency injection</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=SAhJf36_u5U" rel="nofollow">Agile Software Testing with James Bach (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=ILkT_HV9DVU" rel="nofollow">Open Lecture by James Bach on Software Testing (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://vimeo.com/83960706" rel="nofollow">Steve Freeman - Test-Driven Development (that’s not what we meant) (video)</a>
		<ul>
		<li><a href="http://gotocon.com/dl/goto-berlin-2013/slides/SteveFreeman_TestDrivenDevelopmentThatsNotWhatWeMeant.pdf" rel="nofollow">slides</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://david.heinemeierhansson.com/2014/tdd-is-dead-long-live-testing.html" rel="nofollow">TDD is dead. Long live testing.</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=z9quxZsLcfo" rel="nofollow">Is TDD dead? (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=nzJapzxH_rE&amp;list=PLAwxTw4SYaPkWVHeC_8aSIbSxE_NXI76g" rel="nofollow">Video series (152 videos) - not all are needed (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.obeythetestinggoat.com/pages/book.html#toc" rel="nofollow">Test-Driven Web Development with Python</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Dependency injection:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=IKD2-MAkXyQ" rel="nofollow">video</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://jasonpolites.github.io/tao-of-testing/ch3-1.1.html" rel="nofollow">Tao Of Testing</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://jasonpolites.github.io/tao-of-testing/ch4-1.1.html" rel="nofollow">How to write tests</a></li>
		</ul>`
	}},
},
"Strings": {
	"name": "Strings",
	"content_titles": ["String Search and Manipulation", "Tries", "Unicode", "Floating Point"],
	"content": {"String Search and Manipulation": {
		"name": "String Search and Manipulation",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/TH18W/suffix-arrays" rel="nofollow">Sedgewick - Suffix Arrays (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/home/week/4" rel="nofollow">Sedgewick - Substring Search (videos)</a>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/n3ZpG/introduction-to-substring-search" rel="nofollow">1. Introduction to Substring Search</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/2Kn5i/brute-force-substring-search" rel="nofollow">2. Brute-Force Substring Search</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/TAtDr/knuth-morris-pratt" rel="nofollow">3. Knuth-Morris Pratt</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/CYxOT/boyer-moore" rel="nofollow">4. Boyer-Moore</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/3KiqT/rabin-karp" rel="nofollow">5. Rabin-Karp</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures/lecture/tAfHI/search-pattern-in-text" rel="nofollow">Search pattern in text (video)</a></li>
		</ul>`
	},"Tries" : {
		"name": "Tries",
		"html_content": 
		`<ul class="contains-task-list">
		<li>Note there are different kinds of tries. Some have prefixes, some don't, and some use string instead of bits
		to track the path.</li>
		<li>I read through code, but will not implement.</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/home/week/4" rel="nofollow">Sedgewick - Tries (3 videos)</a>
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/CPVdr/r-way-tries" rel="nofollow">1. R Way Tries</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/yQM8K/ternary-search-tries" rel="nofollow">2. Ternary Search Tries</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/algorithms-part2/lecture/jwNmV/character-based-operations" rel="nofollow">3. Character Based Operations</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.cs.yale.edu/homes/aspnes/classes/223/notes.html#Tries" rel="nofollow">Notes on Data Structures and Programming Techniques</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Short course videos:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/08Xyf/core-introduction-to-tries" rel="nofollow">Introduction To Tries (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/PvlZW/core-performance-of-tries" rel="nofollow">Performance Of Tries (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.coursera.org/learn/data-structures-optimizing-performance/lecture/DFvd3/core-implementing-a-trie" rel="nofollow">Implementing A Trie (video)</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.toptal.com/java/the-trie-a-neglected-data-structure" rel="nofollow">The Trie: A Neglected Data Structure</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.topcoder.com/community/competitive-programming/tutorials/using-tries/" rel="nofollow">TopCoder - Using Tries</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=TJ8SkcUSdbU" rel="nofollow">Stanford Lecture (real world use case) (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=NinWEPPrkDQ&amp;index=16&amp;list=PLUl4u3cNGP61hsJNdULdudlRL493b-XZf" rel="nofollow">MIT, Advanced Data Structures, Strings (can get pretty obscure about halfway through)</a></li>
		</ul>`
	}, "Unicode": {
		"name": "Unicode",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.joelonsoftware.com/articles/Unicode.html" rel="nofollow">The Absolute Minimum Every Software Developer Absolutely, Positively Must Know About Unicode and Character Sets</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://kunststube.net/encoding/" rel="nofollow">What Every Programmer Absolutely, Positively Needs To Know About Encodings And Character Sets To Work With Text</a></li>
		</ul>`
	},"Floating Point": {
		"name": "Floating Point",
		"html_content": 
		`<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> simple 8-bit: <a href="https://www.youtube.com/watch?v=ji3SfClm8TU" rel="nofollow">Representation of Floating Point Numbers - 1 (video - there is an error in calculations - see video description)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> 32 bit: <a href="https://www.youtube.com/watch?v=50ZYcZebIec" rel="nofollow">IEEE754 32-bit floating point binary (video)</a></li>
		</ul>`
	},},
},
"System Design": {
	"name": "System Design",
	"content_titles": ["System Design"],
	"content": {"System Design": {
		"name": "System Design",
		"html_content": 
		`<ul class="contains-task-list">
		<li><strong>You can expect system design questions if you have 4+ years of experience.</strong></li>
		<li>Scalability and System Design are very large topics with many topics and resources, since
		there is a lot to consider when designing a software/hardware system that can scale.
		Expect to spend quite a bit of time on this.</li>
		<li>Considerations:
		<ul>
		<li>scalability
		<ul>
		<li>Distill large data sets to single values</li>
		<li>Transform one data set to another</li>
		<li>Handling obscenely large amounts of data</li>
		</ul>
		</li>
		<li>system design
		<ul>
		<li>features sets</li>
		<li>interfaces</li>
		<li>class hierarchies</li>
		<li>designing a system under certain constraints</li>
		<li>simplicity and robustness</li>
		<li>tradeoffs</li>
		<li>performance analysis and optimization</li>
		</ul>
		</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <strong>START HERE</strong>: <a href="https://github.com/donnemartin/system-design-primer">The System Design Primer</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.hiredintech.com/system-design/" rel="nofollow">System Design from HiredInTech</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.quora.com/How-do-I-prepare-to-answer-design-questions-in-a-technical-interview?redirected_qid=1500023" rel="nofollow">How Do I Prepare To Answer Design Questions In A Technical Inverview?</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://blog.gainlo.co/index.php/2015/10/22/8-things-you-need-to-know-before-system-design-interviews/" rel="nofollow">8 Things You Need to Know Before a System Design Interview</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.hiredintech.com/algorithm-design/" rel="nofollow">Algorithm design</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=UrYLYV7WSHM" rel="nofollow">Database Normalization - 1NF, 2NF, 3NF and 4NF (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://github.com/checkcheckzz/system-design-interview">System Design Interview</a> - There are a lot of resources in this one. Look through the articles and examples. I put some of them below.</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.palantir.com/2011/10/how-to-rock-a-systems-design-interview/" rel="nofollow">How to ace a systems design interview</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://everythingisdata.wordpress.com/2009/10/17/numbers-everyone-should-know/" rel="nofollow">Numbers Everyone Should Know</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://blog.tsunanet.net/2010/11/how-long-does-it-take-to-make-context.html" rel="nofollow">How long does it take to make a context switch?</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=srOgpXECblk" rel="nofollow">Transactions Across Datacenters (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://ksat.me/a-plain-english-introduction-to-cap-theorem/" rel="nofollow">A plain English introduction to CAP Theorem</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Paxos Consensus algorithm:
		<ul>
		<li><a href="https://www.youtube.com/watch?v=s8JqcZtvnsM" rel="nofollow">short video</a></li>
		<li><a href="https://www.youtube.com/watch?v=JEpsBg0AO6o" rel="nofollow">extended video with use case and multi-paxos</a></li>
		<li><a href="http://research.microsoft.com/en-us/um/people/lamport/pubs/paxos-simple.pdf" rel="nofollow">paper</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.tom-e-white.com/2007/11/consistent-hashing.html" rel="nofollow">Consistent Hashing</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://horicky.blogspot.com/2009/11/nosql-patterns.html" rel="nofollow">NoSQL Patterns</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Scalability:
		<ul class="contains-task-list">
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=-W9F__D3oY4" rel="nofollow">Great overview (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Short series:
		<ul>
		<li><a href="http://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones" rel="nofollow">Clones</a></li>
		<li><a href="http://www.lecloud.net/post/7994751381/scalability-for-dummies-part-2-database" rel="nofollow">Database</a></li>
		<li><a href="http://www.lecloud.net/post/9246290032/scalability-for-dummies-part-3-cache" rel="nofollow">Cache</a></li>
		<li><a href="http://www.lecloud.net/post/9699762917/scalability-for-dummies-part-4-asynchronism" rel="nofollow">Asynchronism</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://www.aosabook.org/en/distsys.html" rel="nofollow">Scalable Web Architecture and Distributed Systems</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://pages.cs.wisc.edu/~zuyu/files/fallacies.pdf" rel="nofollow">Fallacies of Distributed Computing Explained</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://horicky.blogspot.com/2010/10/scalable-system-design-patterns.html" rel="nofollow">Pragmatic Programming Techniques</a>
		<ul>
		<li><a href="http://horicky.blogspot.com/2010/07/google-pregel-graph-processing.html" rel="nofollow">extra: Google Pregel Graph Processing</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=modXC5IWTJI" rel="nofollow">Jeff Dean - Building Software Systems At Google and Lessons Learned (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://lethain.com/introduction-to-architecting-systems-for-scale/" rel="nofollow">Introduction to Architecting Systems for Scale</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=9nWyWwY2Onc" rel="nofollow">Scaling mobile games to a global audience using App Engine and Cloud Datastore (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=H4vMcD7zKM0" rel="nofollow">How Google Does Planet-Scale Engineering for Planet-Scale Infra (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.topcoder.com/community/competitive-programming/tutorials/the-importance-of-algorithms/" rel="nofollow">The Importance of Algorithms</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2009/8/6/an-unorthodox-approach-to-database-design-the-coming-of-the.html" rel="nofollow">Sharding</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.infoq.com/presentations/Scale-at-Facebook" rel="nofollow">Scale at Facebook (2009)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=oodS71YtkGU" rel="nofollow">Scale at Facebook (2012), "Building for a Billion Users" (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=p0jGmgIrf_M&amp;list=PLRXxvay_m8gqVlExPC5DG3TGWJTaBgqSA&amp;index=4" rel="nofollow">Engineering for the Long Game - Astrid Atkinson Keynote(video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2012/3/26/7-years-of-youtube-scalability-lessons-in-30-minutes.html" rel="nofollow">7 Years Of YouTube Scalability Lessons In 30 Minutes</a>
		<ul>
		<li><a href="https://www.youtube.com/watch?v=G-lGCC4KKok" rel="nofollow">video</a></li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/8/15/how-paypal-scaled-to-billions-of-transactions-daily-using-ju.html" rel="nofollow">How PayPal Scaled To Billions Of Transactions Daily Using Just 8VMs</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://blog.clevertap.com/how-to-remove-duplicates-in-large-datasets/" rel="nofollow">How to Remove Duplicates in Large Datasets</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://www.youtube.com/watch?v=3vV4YiqKm1o" rel="nofollow">A look inside Etsy's scale and engineering culture with Jon Cowie (video)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://thenewstack.io/led-amazon-microservices-architecture/" rel="nofollow">What Led Amazon to its Own Microservices Architecture</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="https://eng.uber.com/trip-data-squeeze/" rel="nofollow">To Compress Or Not To Compress, That Was Uber's Question</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/3/3/asyncio-tarantool-queue-get-in-the-queue.html" rel="nofollow">Asyncio Tarantool Queue, Get In The Queue</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/2/25/when-should-approximate-query-processing-be-used.html" rel="nofollow">When Should Approximate Query Processing Be Used?</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/2/23/googles-transition-from-single-datacenter-to-failover-to-a-n.html" rel="nofollow">Google's Transition From Single Datacenter, To Failover, To A Native Multihomed Architecture</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2012/9/24/google-spanners-most-surprising-revelation-nosql-is-out-and.html" rel="nofollow">Spanner</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/2/15/egnyte-architecture-lessons-learned-in-building-and-scaling.html" rel="nofollow">Egnyte Architecture: Lessons Learned In Building And Scaling A Multi Petabyte Distributed System</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/7/6/machine-learning-driven-programming-a-new-programming-for-a.html" rel="nofollow">Machine Learning Driven Programming: A New Programming For A New World</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/6/15/the-image-optimization-technology-that-serves-millions-of-re.html" rel="nofollow">The Image Optimization Technology That Serves Millions Of Requests Per Day</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/2/1/a-patreon-architecture-short.html" rel="nofollow">A Patreon Architecture Short</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/1/27/tinder-how-does-one-of-the-largest-recommendation-engines-de.html" rel="nofollow">Tinder: How Does One Of The Largest Recommendation Engines Decide Who You'll See Next?</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/1/25/design-of-a-modern-cache.html" rel="nofollow">Design Of A Modern Cache</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/1/13/live-video-streaming-at-facebook-scale.html" rel="nofollow">Live Video Streaming At Facebook Scale</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2016/1/11/a-beginners-guide-to-scaling-to-11-million-users-on-amazons.html" rel="nofollow">A Beginner's Guide To Scaling To 11 Million+ Users On Amazon's AWS</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2015/12/16/how-does-the-use-of-docker-effect-latency.html" rel="nofollow">How Does The Use Of Docker Effect Latency?</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2015/12/14/does-amp-counter-an-existential-threat-to-google.html" rel="nofollow">Does AMP Counter An Existential Threat To Google?</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2015/11/9/a-360-degree-view-of-the-entire-netflix-stack.html" rel="nofollow">A 360 Degree View Of The Entire Netflix Stack</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/latency-everywhere-and-it-costs-you-sales-how-crush-it" rel="nofollow">Latency Is Everywhere And It Costs You Sales - How To Crush It</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://martinfowler.com/articles/serverless.html" rel="nofollow">Serverless (very long, just need the gist)</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://instagram-engineering.tumblr.com/post/13649370142/what-powers-instagram-hundreds-of-instances" rel="nofollow">What Powers Instagram: Hundreds of Instances, Dozens of Technologies</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2012/7/16/cinchcast-architecture-producing-1500-hours-of-audio-every-d.html" rel="nofollow">Cinchcast Architecture - Producing 1,500 Hours Of Audio Every Day</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2010/3/16/justintvs-live-video-broadcasting-architecture.html" rel="nofollow">Justin.Tv's Live Video Broadcasting Architecture</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2010/9/21/playfishs-social-gaming-architecture-50-million-monthly-user.html" rel="nofollow">Playfish's Social Gaming Architecture - 50 Million Monthly Users And Growing</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2011/6/27/tripadvisor-architecture-40m-visitors-200m-dynamic-page-view.html" rel="nofollow">TripAdvisor Architecture - 40M Visitors, 200M Dynamic Page Views, 30TB Data</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/plentyoffish-architecture" rel="nofollow">PlentyOfFish Architecture</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2013/9/23/salesforce-architecture-how-they-handle-13-billion-transacti.html" rel="nofollow">Salesforce Architecture - How They Handle 1.3 Billion Transactions A Day</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> <a href="http://highscalability.com/blog/2013/11/4/espns-architecture-at-scale-operating-at-100000-duh-nuh-nuhs.html" rel="nofollow">ESPN's Architecture At Scale - Operating At 100,000 Duh Nuh Nuhs Per Second</a></li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> See "Messaging, Serialization, and Queueing Systems" way below for info on some of the technologies that can glue services together</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Twitter:
		<ul>
		<li><a href="https://www.youtube.com/watch?v=5cKTP36HVgI" rel="nofollow">O'Reilly MySQL CE 2011: Jeremy Cole, "Big and Small Data at @Twitter" (video)</a></li>
		<li><a href="https://www.infoq.com/presentations/Twitter-Timeline-Scalability" rel="nofollow">Timelines at Scale</a></li>
		</ul>
		</li>
		<li>For even more, see "Mining Massive Datasets" video series in the <a href="#video-series">Video Series</a> section.</li>
		</ul>
		</li>
		<li class="task-list-item"><input type="checkbox" id="" disabled="" class="task-list-item-checkbox"> Practicing the system design process: Here are some ideas to try working through on paper, each with some documentation on how it was handled in the real world:
		<ul>
		<li>review: <a href="https://github.com/donnemartin/system-design-primer">The System Design Primer</a></li>
		<li><a href="http://www.hiredintech.com/system-design/" rel="nofollow">System Design from HiredInTech</a></li>
		<li><a href="https://github.com/jwasham/coding-interview-university/blob/master/extras/cheat%20sheets/system-design.pdf">cheat sheet</a></li>
		<li>flow:
		<ol>
		<li>Understand the problem and scope:
		<ul>
		<li>define the use cases, with interviewer's help</li>
		<li>suggest additional features</li>
		<li>remove items that interviewer deems out of scope</li>
		<li>assume high availability is required, add as a use case</li>
		</ul>
		</li>
		<li>Think about constraints:
		<ul>
		<li>ask how many requests per month</li>
		<li>ask how many requests per second (they may volunteer it or make you do the math)</li>
		<li>estimate reads vs. writes percentage</li>
		<li>keep 80/20 rule in mind when estimating</li>
		<li>how much data written per second</li>
		<li>total storage required over 5 years</li>
		<li>how much data read per second</li>
		</ul>
		</li>
		<li>Abstract design:
		<ul>
		<li>layers (service, data, caching)</li>
		<li>infrastructure: load balancing, messaging</li>
		<li>rough overview of any key algorithm that drives the service</li>
		<li>consider bottlenecks and determine solutions</li>
		</ul>
		</li>
		</ol>
		</li>
		<li>Exercises:
		<ul>
		<li><a href="http://repository.cmu.edu/cgi/viewcontent.cgi?article=2112&amp;context=compsci" rel="nofollow">Design a CDN network: old article</a></li>
		<li><a href="https://blog.twitter.com/2010/announcing-snowflake" rel="nofollow">Design a random unique ID generation system</a></li>
		<li><a href="http://www.indieflashblog.com/how-to-create-an-asynchronous-multiplayer-game.html" rel="nofollow">Design an online multiplayer card game</a></li>
		<li><a href="http://www.slideshare.net/dvirsky/introduction-to-redis" rel="nofollow">Design a key-value database</a></li>
		<li><a href="http://highscalability.com/blog/2011/12/6/instagram-architecture-14-million-users-terabytes-of-photos.html" rel="nofollow">Design a picture sharing system</a></li>
		<li><a href="http://ijcai13.org/files/tutorial_slides/td3.pdf" rel="nofollow">Design a recommendation system</a></li>
		<li><a href="http://www.hiredintech.com/system-design/the-system-design-process/" rel="nofollow">Design a URL-shortener system: copied from above</a></li>
		<li><a href="https://www.adayinthelifeof.nl/2011/02/06/memcache-internals/" rel="nofollow">Design a cache system</a></li>
		</ul>
		</li>
		</ul>
		</li>
		</ul>`
	}},
},};


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

function pickTopic(){
	let picked_topic_index = getRandomInt(topic_names.length);
	let picked_topic_name = topic_names[picked_topic_index];
	let picked_topic = topics[picked_topic_name];

	return picked_topic;
}

function pickContent(topic){
	let picked_content_index = getRandomInt(topic.content_titles.length);
	let picked_content_name = topic.content_titles[picked_content_index];
	let picked_content = topic.content[picked_content_name];

	return(picked_content);
}