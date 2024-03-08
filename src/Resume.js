import React from 'react';

function Resume() {
  return (
    <section>
      <h2>Resume</h2>
      <div>
        <a href="resume_url">Download Resume</a>
      </div>
      <div>
        <h3>Proficiencies:</h3>
        <ul>
          <li>Proficiency 1</li>
          <li>Proficiency 2</li>
          {/* Add more proficiencies */}
        </ul>
      </div>
    </section>
  );
}

export default Resume;