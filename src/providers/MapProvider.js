
class MapProvider {
  static async getCurrentLocation() {
    return new Promise((resolve, reject) => {
      let handler = navigator.geolocation;

      if (handler) {
        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        handler.getCurrentPosition(
          // Success
          position => resolve(position.coords),
          // Error
          error => reject(error),
          options);
      } else {
        reject("Geolocation not available");
      }
    });
  }
}

export default MapProvider
