import React from 'react';

const AboutTeacher = ({Name,Role,Qualifications,Experience}) => {
  return (
    <div className='about-teacher'>
<span id="name">{Name}  </span> <br />
<span id="role">{Role}</span> <br /><br />
<p id='#p'>
Qualifications: <br /> <br />
{Qualifications} <br /><br />
Experience: <br /><br />
{Experience} <br /><br />
</p>
    </div>
  );
}

export default AboutTeacher;
