CollegiateLink Roster Scraper
=============================

This is a browser extension that enables you to download a CSV file containing the names and emails of the members of an organization in CollegiateLink.

## Installation

Download this project.  Edit the following two lines:

* *manifest.json*, line 8: change this to the URL of your institution's CollegiateLink instance.
* *content.js*, line 24: change this to a REGEX representing the pattern for your institution's e-mail addresses.

Now, open up Chrome, and go to the "Extensions" management page.  Check the little "Developer Mode" checkbox at the upper right.  Click "Load unpacked extension".  Navigate to this directory and click OK.

## Usage

Go to the public roster view on CollegiateLink, and a little "scrape" icon will show up in the URL bar.  Click it, and in a few seconds, a CSV will download with your roster information.

## License

This project is released under the X11/MIT license.  Originally developed by Shane Carr of WashU ACM.
