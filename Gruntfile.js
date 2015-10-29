/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    nightwatch: {
      options: {
        standalone: true,
        custom_commands_path: "commands",
        src_folders: ['tests'],
        output_folder: 'report'
      }
    }
    
  });
  
  grunt.loadNpmTasks('grunt-nightwatch');
  
  grunt.registerTask('sayHello', 'Do something interesting.', function(arg) {
    var msg = 'Hi Gliwice!';
    grunt.log.write(msg);
  });


  // Default task.
  grunt.registerTask('default', ['sayHello']);

};
