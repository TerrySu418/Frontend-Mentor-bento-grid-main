# Grid Layout Dashboard

## Table of Contents
- [Overview](#overview)
- [Screenshot](#screenshot)
- [Links](#links)
- [Built With](#built-with)

## Overview
This project is a responsive dashboard layout built using React and Tailwind CSS. It features a dynamic grid system with multiple card components arranged in a visually appealing layout. The dashboard is designed to be responsive across different screen sizes while maintaining a minimum width to ensure content readability.

### Key Features
- Responsive grid layout
- Multiple custom card components
- Consistent spacing and rounded corners
- Color-coded sections for visual hierarchy
- Minimum width constraint for optimal viewing
- Flexible row and column spanning

## Screenshot
![Project Screenshot](./Screenshot.png)

## Links
- [Live Site URL](https://terrysu418.github.io/Frontend-Mentor-bento-grid-main/)
- [Repository URL](https://github.com/TerrySu418/Frontend-Mentor-bento-grid-main)

## Built With
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- Modern CSS Grid
- Responsive Design Principles

### Technical Details
The layout utilizes:
- CSS Grid with specific column and row configurations
- Tailwind's responsive classes (md:, lg:)
- Custom components for modular design
- Minimum width constraint of 760px
- Flexible scaling up to 1024px for larger screens
- Consistent gap spacing of 0.5rem (gap-2)

### Component Structure
```jsx
Components:
- Card  (Row span: 3)
- Card1 (Row span: 2, Column span: 2)
- Card2 (Row span: 4)
- Card3 (Row span: 3)
- Card4 (Row span: 2)
- Card5 (Row span: 2)
- Card6 (Row span: 2)
- Card7 (Row span: 2, Column span: 2)
```

### Color Scheme
- Yellow (light): bg-yellow-100
- Yellow: bg-yellow-500
- Purple: bg-purple-500
- Purple (light): bg-purple-100
- Gray (light): bg-gray-100