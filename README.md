


##  Components Description

###  IdCard Component
- Presentational component
- Displays:
  - Avatar image
  - Name
  - Role
  - Department
  - ID number
- Receives all data via **props**

###  App Component
- Parent/container component
- Holds an array of people objects
- Uses `.map()` to render multiple ID cards
- Passes data to `IdCard` using props

---

##  Data Rendering
The application uses an array of objects where each object represents a person.
The `.map()` method is used to dynamically render ID cards, and a unique `key` prop is assigned to each card.

---

## Styling
- Styled using **Tailwind CSS**
- Cards include:
  - Borders and shadows
  - Clean typography
  - Responsive layout
  - Rounded corners
- Designed to resemble real ID cards

---

##  How to Run the Project Locally

1. Clone the repository:
   ```bash
   git clone 
   npm run dev
   
