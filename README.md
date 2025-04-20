# Portfolio - Installation Guide

## Prerequisites

- Node.js 20.x or later
- Git

## Installation Steps

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Add your blog posts**

Create a new .mdx file for each blog post inside the app/blog folder. For example:
app/blog/your-article-slug/page.mdx.

Example blog post structure in .mdx:

```mdx
# Your Article Title

Introduction

Your content here...

## Code Examples

// Example code block here...
```

**Note:** You can use all MDX features, including React components, in your blog posts.

4. **Project Structure**

For a better understanding of the Next.js project structure, refer to the [Next.js](https://nextjs.org/docs/app/getting-started/project-structure) documentation.

5. **Additional Features**

Want to add more animated components?
Check out [Motion-Primitives](https://motion-primitives.com/) for additional animation components and templates.