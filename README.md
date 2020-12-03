# Convert .PNG files to .SVG files
## for fun and profit

### to install & setup

1. clone this repo and `cd` into the directory
1. run `yarn` to install dependencies

### to use
you will need the name of the directory* that contains the files you wish to convert.

*the app assumes the directory is on in the same level as the cloned repo, IE both are in `desktop` - if not add the path to the name like `my_folder/png_files`

1. run `yarn convert my_png_folder` - changing the name `my_png_folder` to whatever you called yours.
1. unless there was an error, the converted files will be in the `output` directory at the root of this project
1. move the files to wherever you would like to use them, they may get overwritten if left in place and a new file has the same name.
