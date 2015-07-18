kAdminConfig = {
	name: "BBBB Admin",
	roles: [ "admin" ],
	collections: {
		Restaurant: {
			tableColumns: [
				{ label: 'Name', name: 'name' },
			]
		},
		Item: {
			tableColumns: [
				{ label: 'Name', name: 'name' },
				{ label: 'Restaurant', name: 'restaurant.name' },
			],
			omitFields: [ "restaurant" ]
		}
	}
}