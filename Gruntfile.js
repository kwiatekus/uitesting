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
      },
      "smoke":
      {
        src_folders: ['tests/1_smoke'],
      },
      
      "integration":
      {
        src_folders: ['tests/2_integration'],
      },
      
      "safari":
      {
          desiredCapabilities: {
              browserName: "safari",
          }
      },
      "saucelabs":
      {
        src_folders: ['tests/2_integration'],
        standalone : false,
        selenium_host: "ondemand.saucelabs.com",
        selenium_port: 80,
        username: "saucelabs_username",
        access_key: "saucelabs_apikey",
        desiredCapabilities: {
              browserName: "Internet Explorer",
              version: "6",
              platform: "Windows XP"
        }
      },
      
      "saucelabs_ie_xp":
      {
        src_folders: ['tests/2_integration'],
        standalone : false,
        selenium_host: "ondemand.saucelabs.com",
        selenium_port: 80,
        username: "saucelabs_username",
        access_key: "saucelabs_apikey",
        desiredCapabilities: {
              browserName: "Internet Explorer",
              version: "6",
              platform: "Windows XP"
        }
      },
      
      "saucelabs_iphone":
      {
        src_folders: ['tests/2_integration'],
        custom_commands_path: "commands_iphone",
        standalone : false,
        selenium_host: "ondemand.saucelabs.com",
        selenium_port: 80,
        username: "saucelabs_username",
        access_key: "saucelabs_apikey",
        desiredCapabilities: {
              browserName: "iphone",
              version: "6", 
              deviceOrientation: 'portrait'
        }
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
