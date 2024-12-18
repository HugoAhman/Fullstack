import mongoose, { Query, set } from "mongoose";
import { Elysia, t } from "elysia";
import { jobs as JobsModel } from "./schema";

await mongoose.connect('mongodb+srv://hugo:95DpDWfXB9Kwr9rh@cluster0.6aom8.mongodb.net/Fullstack?retryWrites=true&w=majority&appName=Cluster0')

const app = new Elysia();

app.onRequest(({ request, set }) => {

    set.headers["Access-Control-Allow-Origin"] = "*"; // Allow all origins
    set.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"; // Allow these methods
    set.headers["Access-Control-Allow-Headers"] = "Content-Type"; // Allow this header


    if (request.method === "OPTIONS") {
        set.status = 204;
        return;
    }
});

// Route to create a new job
app.post('/jobsCreation', async ({ body, set }) => {
    const { title, type, experience } = body as { title: string, type: string, experience: string };
    try {
        const newJob = await JobsModel.create({ title, type, experience });
        set.status = 201; // Created
        return { message: `${title} was just created as a new job!`, job: newJob };
    } catch (error) {
        set.status = 500;
        return { message: "Error occurred creating the job.", error: error.message };
    }
});

// Route to get all jobs
app.get('/jobs', async ({ set }) => {
    try {
        const allJobs = await JobsModel.find();
        return { jobs: allJobs };
    } catch (error) {
        set.status = 500;
        return { message: "Error occurred fetching jobs.", error: error.message };
    }
});

// Route to search jobs
app.get('/jobs/search', async ({ query, set }) => {
    const { title, type, experience } = query;
    if (!title && !type && !experience) {
        set.status = 400;
        return { message: "Search parameter (title, type or experience) is required!" };
    }

    const filter: any = {};
    if (title) filter.title = { $regex: title, $options: "i" }; // Case-insensitive match for title
    if (type && type !== 'all') filter.type = { $regex: type, $options: "i" }; // Case-insensitive match for type
    if (experience && experience !== 'all') filter.experience = { $regex: experience, $options: "i" };

    console.log("Filter being applied: ", filter);  // Log the filter

    try {
        const jobs = await JobsModel.find(filter);
        console.log("Jobs found: ", jobs);  // Log the jobs returned from the database
        if (!jobs.length) {
            set.status = 404;
            return { message: `No Jobs available with the specified criteria: ${JSON.stringify(filter)}.` };
        }
        return { jobs };
    } catch (error) {
        set.status = 500;
        return { message: "An error occurred when searching for jobs!", error: error.message };
    }
});



console.log('Server Date:', new Date().toString()); // Server date/time
console.log('Server Time Zone:', Intl.DateTimeFormat().resolvedOptions().timeZone);
app.listen(3030, () => { console.log('Server is running index.ts on http://localhost:3030') });