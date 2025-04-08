# M. Koesbanoe Family Tree Web App

A responsive web application for exploring, searching, and visualizing the M. Koesbanoe family genealogy. This application provides an intuitive interface for family members to discover their heritage and connections.

![M. Koesbanoe Family Tree Banner](https://via.placeholder.com/800x400?text=M.+Koesbanoe+Family+Tree)

## Features

- **Search Functionality**: Easily search for family members by name, address, or other attributes.
- **Family Tree Visualization**: Interactive visual representation of family relationships.
- **Generation View**: Browse family members by generation (Cucu, Cicit).
- **Responsive Design**: Works seamlessly on mobile devices and desktops.
- **Admin Panel**: Generate API keys for secure access to the data.

## Technology Stack

- **Frontend**: HTML5, JavaScript, Tailwind CSS, Font Awesome
- **Backend**: Google Apps Script
- **Deployment**: Google Apps Script Web App
- **API**: Custom RESTful API for accessing family data

## Installation

1. Create a new Google Apps Script project
2. Copy the files from this repository to your project:
   - `Code.gs`
   - `Index.html`
   - `JavaScript.html`
   - `Stylesheet.html`
3. Update the `DEPLOYMENT_ID` and `API_KEY` in `Code.gs` with your values
4. Deploy as a web app with appropriate access settings

## Usage

1. Open the deployed web app URL
2. Use the navigation menu to switch between different sections:
   - Search for family members
   - View family trees
   - Browse by generation
   - Access admin functions

## API Documentation

The app connects to a custom API with the following endpoints:

- `search`: Find family members by keyword
- `get`: Retrieve details for a specific person
- `family-tree`: Generate family tree data
- `generasi`: List members of a specific generation
- `generate-api-key`: Create new API keys (admin only)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- The M. Koesbanoe family for preserving their heritage
- Tailwind CSS and Font Awesome for the beautiful UI components
