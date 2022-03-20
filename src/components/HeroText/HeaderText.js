import * as React from 'react';
import Typography from '@mui/material/Typography';

export const Header = ({title}) => {
	return(
		<Typography mt={4} mb={4} variant="h3" component="h2">
			{title}
		</Typography>
	);
}