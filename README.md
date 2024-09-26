# Random Password Generator

## Overview
This is a simple web application that generates strong and secure random passwords. The user can select the character types they want to include in the password (uppercase letters, lowercase letters, numbers, and symbols), as well as define the password length. The application also allows users to shuffle the generated password and clear the input fields.

## Features
- **Character Selection**: Choose from uppercase letters (ABC), lowercase letters (abc), numbers (123), and symbols (#$&).
- **Password Length**: Customize the length of the password (minimum 6 characters).
- **Generate Password**: Generates a secure password based on the selected criteria.
- **Shuffle Password**: Reorder the characters of the generated password randomly.
- **Clear Input**: Clear the password and reset the input fields.
  
## Preview
![Capture](https://github.com/user-attachments/assets/f1e4f39b-eeff-47c1-86fe-214906960aef)


## Technologies Used
- **HTML5**: Structuring the web page.
- **CSS3**: Styling the web page for a modern and responsive design.
- **JavaScript**: Implementing the password generation and user interaction logic.

## How to Use
1. **Clone or Download** the repository.
2. Open the `index.html` file in your web browser.
3. Choose the character types you'd like to include in your password by selecting the checkboxes:
   - Uppercase letters (ABC)
   - Lowercase letters (abc)
   - Numbers (123)
   - Symbols (#$&)
4. Enter the desired password length (must be at least 6 characters).
5. Click the **Generate** button to create your password.
6. If you'd like, click the **Shuffle** button to reorder the generated password.
7. To start over, click the **Clear** button.

## File Structure
- `index.html`: The main HTML file for the user interface.
- `style.css`: The stylesheet for the project.
- `script.js`: Contains the JavaScript logic for generating, shuffling, and clearing the password.
- `download.svg`: The SVG image used in the layout.

## Future Improvements
- Add functionality to copy the generated password to the clipboard.
- Include more customization options (e.g., password strength indicator).
- Improve validation to handle non-numeric values in the password length input.
