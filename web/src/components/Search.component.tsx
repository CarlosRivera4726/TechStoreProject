import Paper from '@mui/material/Paper';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchComponent() {
    return (
        <Paper
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                maxWidth: 400,
                height: 50,
                borderRadius: 999,
                boxShadow: 'none',
                border: '1px solid #e5e7eb',
            }}
        >
            <TextField
                variant="outlined"
                fullWidth
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: 999,
                        '& fieldset': {
                            border: 'none',
                        },
                    },
                    '& .MuiInputBase-root': {
                        height: 42,
                        fontSize: 14,
                    },
                }}
                placeholder="Buscar productos..."
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => { }} aria-label="search" size="small">
                                    <SearchIcon fontSize="small" />
                                </IconButton>
                            </InputAdornment>
                        ),
                    },
                }}
            />
        </Paper>
    );
}
