import React, { useEffect } from 'react';

const Page = ({ title, description }) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
      metaDescriptionTag.setAttribute('content', description);
    } else {
      // Create meta description tag if not exists
      const newMetaTag = document.createElement('meta');
      newMetaTag.setAttribute('name', 'description');
      newMetaTag.setAttribute('content', description);
      document.head.appendChild(newMetaTag);
    }

    // Clean up on unmount
    return () => {
      if (metaDescriptionTag) {
        // Restore original meta description if exists
        metaDescriptionTag.setAttribute('content', '');
      }
    };
  }, [title, description]);

  return (
    <div>
      {/* Your page content */}
    </div>
  );
};

export default Page;
