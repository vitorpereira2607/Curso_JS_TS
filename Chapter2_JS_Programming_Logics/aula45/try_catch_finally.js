try {
    console.log('File opened');
    console.log('Manipulated the file and it generated an error');
    console.log('File closed');
} catch (error) {
    //executes when it catches an error
    console.log('Handling the error')
} finally {
    // its always executed
}