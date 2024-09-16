import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'

// get all the mdx files from the directory
function getMdxFiles(dir: string){
    return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

// read the data from those mdx files

function readMdxFile(filePath: fs.PathOrFileDescriptor){
    const rawContent = fs.readFileSync(filePath, 'utf-8')
    return matter(rawContent)
}

// present the mdx data and metadata

function getMDXData(dir: string) {
    const mdxFile = getMdxFiles(dir)
    return mdxFile.map((file) => {
        const {data: metadata, content} = readMdxFile(path.join(dir, file));
        const slug = path.basename(file, path.extname(file))

        return {
            metadata,
            slug,
            content
        }
    })
}

export function getBlogPosts() {
    return getMDXData(path.join(process.cwd(), 'app', 'blog', 'content'))
}

export function getAllProjects() {
    return getMDXData(path.join(process.cwd(), 'app', 'blog', 'projects'))
}

export function formatDate(date: string, includeRelative = true) {
    const currentDate = new Date();
    if(date.includes('T')) {
        date = `${date}T:00:00:00`;
    }

    const targetDate = new Date(date);

    const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
    const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
    const daysAgo = currentDate.getDate() - targetDate.getDate()

    let formattedDate = "";

    if(yearsAgo > 0) {
        formattedDate = `${yearsAgo}y ago`
    } else if(monthsAgo > 0) {
        formattedDate = `${monthsAgo}m ago`
    } else if(daysAgo > 0) {
        formattedDate = `${daysAgo}d ago`
    } else {
        formattedDate = "Today"
    }

    const fullDate = targetDate.toLocaleString('en-us', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })

    if(!includeRelative) {
        return fullDate;
    }

    return `${fullDate} (${formattedDate})`
}