// A person's overall level is calculated by summing their individual base stats (not skills, but still including modifiers resulting from advanced skills), and determining the iteration count in the Fibonacci sequence.
const levels = [
  {level: 0, threshold: 0, description: ""},
  {level: 1, threshold: 1, description: ""},
  {level: 2, threshold: 2, description: ""},
  {level: 3, threshold: 3, description: ""},
  {level: 4, threshold: 5, description: ""},
  {level: 5, threshold: 8, description: ""},
  // Typical adult
  {level: 6, threshold: 13, description: ""},
  {level: 7, threshold: 21, description: ""},
  {level: 8, threshold: 34, description: ""},
  // Master of a discipline, or student of many
  {level: 9, threshold: 55, description: ""},
  {level: 10, threshold: 89, description: ""},
  // World-class master
  {level: 11, threshold: 144, description: ""},
  {level: 12, threshold: 233, description: ""},
  {level: 13, threshold: 377, description: ""},
  {level: 14, threshold: 610, description: ""},
  {level: 15, threshold: 987, description: ""},
]

const abilities = {
  life_skills: {

    food_preparation: {
      levels: [
        {level: 0, description: "Unable to eat without intervention"},
        {level: 1, description: "Capable of following simple preparation instructions after demonstration"},
        {level: 2, description: "Can follow simple preparation instructions"},
        {level: 3, description: "Can follow and modify simple recipes"},
        {level: 4, description: "Can follow a single complex recipe at a time"},
        {level: 5, description: "Can prepare all standard meals without referencing recipes"},
        {level: 6, description: "Can prepare a meal with no warning and only ingredients"},
        {level: 7, description: "Can follow multiple complex recipes at a time"},
        {level: 8, description: "IDK - Can identify mistakes in prepared food?"},
        {level: 9, description: "Capable of creating recipes from scratch"},
        {level: 10, description: "Capable of creating a meal from virtually any set of ingredients"},
      ],
      achievements: {
        negative: [
          {
            title: "Poison! Who would do such a mean thing?",
            description: "Give yourself food poisoning",
            impact: {wisdom: -1},
          },
        ],
        neutral: [
          {
            title: "Charcoal Special",
            description: "Burn a meal past the point of edibility",
          },
        ],
        positive: [
          {
            title: "Compliments of the Chef",
            description: "Successfully prepare your first multi-course meal without referencing a single recipe",
            impact: {wisdom: 1},
          },
        ],
      },
    },

  }

}
