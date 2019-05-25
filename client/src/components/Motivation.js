import React, { Component } from 'react';

class Motivation extends Component {
  state = {
    motivation: [
      "Strength", "Joy", "Wealth", "Health", "Competence", "Clean", "Hospitality", "Attraction", "Intuition", "Tranquility", "Integrity", "Focus", "Aspiration", "Industriousness", "Love", "Beauty", "Peace", "Grace", "Worth", "Power", "Value", "Truth", "Light", "Luck", "Intelligence", "Abundance", "Authenticity", "Awesomeness", "Blessing", "Confidence", "Honesty", "Empathy", "Enough", "Forgiveness", "Gratitude", "Happiness", "Success", "Innovation", "Mindfulness", "Memorable", "Open(ness)", "Perfection", "Prosperity", "Radience", "Self-Love", "Fearless", "Courage", "Rest and Relaxation", "Healing", "Respect", "Determination", "Complete", "Power", "Uncomparable",
    ]
  }


  render() {
    return (
      <div>
        <p>I am {this.state.motivation[Math.floor(Math.random() * this.state.motivation.length)]}.</p>
      </div>
    );
  }
}

export default Motivation;