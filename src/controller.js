module.exports = {
    getAllUsers: ( req, res, next ) => {
        const db = req.app.get('db');

        db.get_all_users()
          .then(response => res.status(200).send(response) )
          .catch( err => res.status(500).send(err) );
      },

      getAllVehicles: ( req, res, next ) => {
        const db = req.app.get('db');

        db.get_all_vehicles()
          .then(response => res.status(200).send(response) )
          .catch( err => res.status(500).send(err) );
      },

      createUser: ( req, res, next ) => {
        const db = req.app.get('db');
        const { name, email } = req.body

        db.create_user(name, email)
          .then(response => res.status(200).send(response) )
          .catch( err => res.status(500).send(err) );
      },

      createVehicle: ( req, res, next ) => {
        const db = req.app.get('db');
        const { make, model, year, owner_id } = req.body

        db.create_vehicle(make, model, year, owner_id)
          .then(response => res.status(200).send(response) )
          .catch( err => res.status(500).send(err) );
      },

      getUserVehiclesCount: ( req, res, next ) => {
        const db = req.app.get('db');
        // const {  } = req.body

        db.get_user_vehicles_count(req.params.userId)
          .then(response => res.status(200).send(response) )
          .catch( err => res.status(500).send(err) );
      },

      getUserVehicles: ( req, res, next ) => {
        const db = req.app.get('db');
        // const {  } = req.body

        db.get_user_vehicles(req.params.userId)
          .then(response => res.status(200).send(response) )
          .catch( err => res.status(500).send(err) );
      },

      getVehiclesByEmail: (req, res, next) => {
        const db = req.app.get('db');
        const { query } = req;
        if (query.userEmail) {
            return db.get_vehicles_by_email([ query.userEmail ])
                .then( cars => res.status(200).send(cars) )
                .catch( () => res.status(500).send() );
        } else if (query.userFirstStart) {
            return db.get_vehicles_by_letter([ query.userFirstStart + '%' ])
                .then( cars => res.status(200).send(cars) )
                .catch( () => res.status(500).send() );
        }
    },

      getNewerVehicles: ( req, res, next ) => {
        const db = req.app.get('db');
        // const {  } = req.body

        db.get_newer_vehicles()
          .then(response => res.status(200).send(response) )
          .catch( err => res.status(500).send(err) );
      },

      updateOwnerId: ( req, res, next ) => {
        const db = req.app.get('db');
        // const {  } = req.body

        db.update_owner_id(req.params.userId, req.params.vehicleId)
          .then(response => res.status(200).send(response) )
          .catch( err => res.status(500).send(err) );
      },

      deleteOwnerId: ( req, res, next ) => {
        const db = req.app.get('db');
        // const {  } = req.body

        db.delete_owner_id(req.params.vehicleId)
          .then(response => res.status(200).send(response) )
          .catch( err => res.status(500).send(err) );
      },

      deleteVehicle: ( req, res, next ) => {
        const db = req.app.get('db');
        // const {  } = req.body

        db.delete_vehicle(req.params.vehicleId)
          .then(response => res.status(200).send(response) )
          .catch( err => res.status(500).send(err) );
      },

}