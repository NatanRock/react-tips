// Core
import { useContext } from 'react';

// Hooks
import { useTags } from '../hooks';

// Helpers
import { getTagIcon, fetchify } from '../helpers';
import { Context } from '../lib/selectedTagContext';

// Mock
// import icons from '../mock-data/tags.json';

export const Tags = ({ tipViewMode }) => {
    const { data, isFetched } = useTags();
    const [selectedTagId, setSelectedTagId] = useContext(Context);


    const tagsJSX = Array.isArray(data) && data.map(({ id, name }) => {
        const TagIcon = getTagIcon(name);

        const handleClick = () => {
            setSelectedTagId(id);
        };

        return (
            <span
                data-active = { selectedTagId === id || tipViewMode === 'all-topics' } key = { id }
                className = 'tag'
                onClick = { handleClick }>
                <TagIcon />
                { name }
            </span>
        );
    });


    return <div className = 'tags'>{ fetchify(isFetched, tagsJSX) }</div>;
};
