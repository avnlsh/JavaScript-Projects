function generatePyramid(height) {
    for (let i = 1; i <= height; i++) {
        // Generate spaces
        let spaces = ' '.repeat(height - i);
        // Generate hashes
        let hashes = '#'.repeat(i * 2 - 1);
        // Log the pyramid row
        console.log(spaces + hashes + spaces);
    }
}

// Call the function with a desired height
generatePyramid(5);

