import React, { useState } from "react";

const TagCarrousel = ({tagList}) => {
    const [selectedTags, setSelectedTags] = useState([])

    const handleTagClick = (tag) => {
        
        const found = selectedTags.find(current => current === tag)
        if (found) {
            setSelectedTags(selectedTags.filter(current => current !== tag))
            return
        }
        setSelectedTags(prev => [...prev, tag])
    }

    const renderTagStyle = (tag) => {
        const found = selectedTags.find(current => current === tag)
        if (!found) return false
        return true
    }

  return (
    <ul className="flex space-x-4 overflow-x-scroll">
      {tagList.map((tag) => (
        <li 
        onClick={() => handleTagClick(tag)}
        className={`font-bold border ${renderTagStyle(tag) ? 'bg-secondary text-white transform scale-90' : 'border-secondary text-secondary'} rounded-full px-4 py-1`}>{tag}</li>
      ))}
    </ul>
  );
};

export default TagCarrousel;
