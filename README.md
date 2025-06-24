# Suraj's Blog Platform

A modern, feature-rich blog built with Next.js, MDX, and Tailwind CSS, featuring newsletter integration and responsive design.

## Overview

This platform provides a seamless blogging experience with advanced features like category organization, newsletter subscription, and responsive design. Built with modern web technologies, it offers a fast, accessible, and visually appealing reading experience.

## Features

### Content Management
- **MDX Support**: Write content with rich React components
- **Category System**: Organize content by categories
- **Tag-Based Filtering**: Additional content organization
- **Dynamic Routing**: Clean URLs for all content

### User Experience
- **Responsive Design**: Optimized for all devices
- **Dark Mode**: Automatic and manual theme switching
- **Reading Progress**: Visual indicator while reading
- **Table of Contents**: Auto-generated for each article

### Newsletter Integration
- **ConvertKit API**: Seamless email subscription
- **Custom Forms**: Styled newsletter signup components
- **Toast Notifications**: User feedback for actions
- **Analytics**: Track subscriber growth

### Performance
- **Static Site Generation**: Fast loading times
- **Image Optimization**: Responsive and optimized images
- **Code Splitting**: Efficient resource loading
- **SEO Optimized**: Meta tags and structured data

## Tech Stack

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **Content**: MDX
- **Newsletter**: ConvertKit
- **Deployment**: Vercel
- **Language**: TypeScript

## Project Structure

```
my-blog/
├── components/       # Reusable UI components
├── content/          # MDX blog posts
├── lib/              # Utility functions
├── pages/            # Next.js pages
├── public/           # Static assets
├── styles/           # Global styles
└── templates/        # Article templates
```

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd my-blog
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create `.env.local`:
```
CONVERTKIT_API_KEY=your_api_key
CONVERTKIT_FORM_ID=your_form_id
```

4. Run development server
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Content Creation

### Adding Articles

1. Create a new MDX file in the `content/` directory using the template from `templates/article-template.mdx`
2. Add frontmatter with required metadata
3. Write your content using Markdown and MDX components
4. Articles will automatically appear in the appropriate category

### Categories

The blog supports four main categories:
- **AI & Innovation**
- **Life & Growth**
- **Code & Build**
- **Politics**

## Deployment

The blog is configured for deployment on Vercel:

1. Push to GitHub
2. Connect to Vercel
3. Configure environment variables
4. Deploy

## License

MIT

## Author

Suraj Kumar