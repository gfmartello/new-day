import React from 'react';
import './AboutMe.scss'

const AboutMe = () => {
  return (
    <section className='about-me'>
      <h1 className='about-me__title'>About Me</h1>
      <div className='about-me__blurb-container'>
        <p className='about-me__blurb'>I enjoy helping people work through personal struggles, whether they be about relationships, self-esteem, anxieties, depression, trauma, or dealing with a loss of any kind. My style can be non directive, or directive as preferred by the client using reflective feedback allowing people to come to their own decisions. I also do extensive research on the issues at hand and provide education and suggestions always encouraging and giving hope. Sessions are interactive and empathetic, helping people to identify and transform old patterns, meet their needs, and create fulfilling relationships.  Life can be hard, and I strive to help people maneuver themselves through the difficult times. <br />
          I am a New York Licensed Mental Health Therapist and have multiple years experience dealing with various different issues such as Depression, Anxiety, Low Self Esteem, Intimate Partner Violence, Trauma, ADHD, Oppositional Defiant Disorder, Parental Abuse, Narcissism and those healing from Narcissistic abuse.</p>
        <span>HIPAA Compliant Video Sessions Available</span>
      </div>
      <div>
        <ul>
          <li>Depression</li>
          <li>Anxiety and Phobias</li>
          <li>Life Transitions</li>
          <li>Difficulties with Self-Esteem</li>
          <li>Post-traumatic Stress Disorder (PTSD)</li>
          <li>Professional/Career Issues</li>
          <li>College/Graduate School Issues</li>
          <li>Medical and Health Concerns</li>
          <li>Pain Management</li>
          <li>Stress Management</li>
          <li>Sexual Abuse</li>
          <li>Spirituality</li>
          <li>Women's Issues</li>
          <li>Healing from Narcissistic Abuse</li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMe;