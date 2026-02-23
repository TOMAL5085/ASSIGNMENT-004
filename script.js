let jobs = [
    { id: 1, company: "Mobile First Corp", role: "React Native Developer", location: "Remote", type: "Full-time", salary: "$130,000 - $175,000", desc: "Build cross-platform mobile applications using React Native.", status: "not-applied" },
    { id: 2, company: "WebFlow Agency", role: "Web Designer & Developer", location: "Los Angeles, CA", type: "Part-time", salary: "$80,000 - $120,000", desc: "Create stunning web experiences for high-profile clients.", status: "not-applied" },
    { id: 3, company: "DataViz Solutions", role: "Data Visualization Specialist", location: "Boston, MA", type: "Full-time", salary: "$125,000 - $165,000", desc: "Transform complex data into compelling visualizations.", status: "not-applied" },
    { id: 4, company: "CloudFirst Inc", role: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$140,000 - $190,000", desc: "Design and maintain scalable backend systems using Python and AWS.", status: "not-applied" },
    { id: 5, company: "Innovation Labs", role: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110,000 - $150,000", desc: "Create beautiful and functional user interfaces for our suite of products.", status: "not-applied" },
    { id: 6, company: "MegaCorp Solutions", role: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$130,000 - $170,000", desc: "Build enterprise applications with JavaScript and modern frameworks.", status: "not-applied" },
    { id: 7, company: "StartupXYZ", role: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120,000 - $160,000", desc: "Join our fast-growing startup and work on our core platform.", status: "not-applied" },
    { id: 8, company: "TechCorp Industries", role: "Senior Frontend Developer", location: "San Francisco, CA", type: "Full-time", salary: "$130,000 - $175,000", desc: "Build scalable web applications using React and TypeScript.", status: "not-applied" }
];

let currentFilter = 'all';

document.addEventListener('DOMContentLoaded', () => updateUI());

function updateUI() {
    document.getElementById('total-count').innerText = jobs.length;
    document.getElementById('interview-count').innerText = jobs.filter(j => j.status === 'interview').length;
    document.getElementById('rejected-count').innerText = jobs.filter(j => j.status === 'rejected').length;
    renderJobs();
}

function filterJobs(filter) {
    currentFilter = filter;
    document.querySelectorAll('.btn').forEach(btn => btn.classList.remove('active-tab'));
    document.getElementById(`tab-${filter}`).classList.add('active-tab');
    renderJobs();
}

function setStatus(id, newStatus) {
    const jobIndex = jobs.findIndex(j => j.id === id);
    jobs[jobIndex].status = (jobs[jobIndex].status === newStatus) ? 'not-applied' : newStatus;
    updateUI();
}

function deleteJob(id) {
    jobs = jobs.filter(j => j.id !== id);
    updateUI();
}

function renderJobs() {
    const container = document.getElementById('jobs-container');
    const emptyState = document.getElementById('empty-state');
    let filtered = jobs;
    if (currentFilter === 'interview') filtered = jobs.filter(j => j.status === 'interview');
    if (currentFilter === 'rejected') filtered = jobs.filter(j => j.status === 'rejected');

    document.getElementById('section-count').innerText = filtered.length;

    if (filtered.length === 0) {
        container.innerHTML = "";
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        container.innerHTML = filtered.map(job => `
            <div class="job-card">
                <button onclick="deleteJob(${job.id})" class="absolute top-6 right-6 text-gray-400 hover:text-red-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
                <h4 class="text-xl font-bold text-[#002d5b]">${job.company}</h4>
                <p class="text-gray-500 mb-2">${job.role}</p>
                <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mb-4">
                    <span>${job.location}</span> • <span>${job.type}</span> • <span>${job.salary}</span>
                </div>
                <div class="mb-4">
                    <span class="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold rounded uppercase">
                        ${job.status.replace('-', ' ')}
                    </span>
                </div>
                <p class="text-gray-600 text-sm mb-6 leading-relaxed">${job.desc}</p>
                <div class="flex gap-3">
                    <button onclick="setStatus(${job.id}, 'interview')" class="btn btn-outline btn-sm ${job.status === 'interview' ? 'bg-green-500 text-white border-green-500' : 'text-green-500 border-green-500 hover:bg-green-50'}">INTERVIEW</button>
                    <button onclick="setStatus(${job.id}, 'rejected')" class="btn btn-outline btn-sm ${job.status === 'rejected' ? 'bg-red-400 text-white border-red-400' : 'text-red-400 border-red-400 hover:bg-red-50'}">REJECTED</button>
                </div>
            </div>
        `).join('');
    }
}