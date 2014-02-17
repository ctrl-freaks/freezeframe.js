<?

class gif {

	var $file;
	var $filehandle;
	var $read_length = 13;

	var $data;

	var $signature;
	var $version;

	var $width;
	var $height;

	var $gct_flag;
	var $color_resolution;
	var $sort_flag;
	var $gct_size;
	var $bg_color_index;
	var $pixel_aspect_ratio;

	var $gct;

	var $id_top_position;
	var $id_left_position;
	var $id_width;
	var $id_height;

	/**
	 * [__construct description]
	 * @param [type] $_file [description]
	 */
	function __construct($_file) {
		// save filename
		$this -> file = $_file;
		// open file
		$this -> filehandle = fopen($_file, "rb");
		// read file
		$this -> data = fread($this -> filehandle, $this -> read_length);
	}

	/**
	 * [read_header description]
	 * @return [type] [description]
	 */
	public function read_header() {

		// read signature
		$this -> signature = $this -> data[0] . $this -> data[1] . $this -> data[2];

		// read version
		$this -> version = $this -> data[3] . $this -> data[4] . $this -> data[5];

		// read and compute width
		$this -> width = (ord($this -> data[7]) * 256) + ord($this -> data[6]);

		// read and compute height
		$this -> height	= (ord($this -> data[9]) * 256) + ord($this -> data[8]);

		// read global color table flag
		$this -> gct_flag = ord($this -> data[10]) & 128 == 128 ? TRUE : FALSE;

		// read color resolution
		$this -> color_resolution = (ord($this -> data[10]) & 112 >> 4) + 1;

		// read sort flag
		$this -> sort_flag = ord($this -> data[10]) & 8 == 8 ? TRUE : FALSE;


		if ($this -> gct_flag) {
			// read and compute global color table size
			$this -> gct_size = pow(((ord($this -> data[10]) & 7) + 1), 2);
			// read background color index
			$this -> bg_color_index = $this -> data[11];
		} else {
			// set global color table size and background color index to NULL
			$this -> gct_size = $this -> bg_color_index = NULL;
		}


		if($this -> data[12] == 0) {
			// set pixel aspect ratio to 0
			$this -> pixel_aspect_ratio = 0;
		} else {
			// read and compute pixel aspect ratio
			$this -> pixel_aspect_ratio = (hexdec($data[12]) + 15) / 64;
		}

		// expand number of bytes to be read to include gct and image desciptor
		$this -> read_length += ($this -> gct_size * 3) + 10;
		// read more data
		fclose($this -> filehandle);
		$this -> filehandle = fopen($this -> file, "r");
		$this -> data = fread($this -> filehandle, $this -> read_length);

		// read global color table
		//$this -> gct = substr($this -> data, 13, ($this -> gct_size * 3));

		//$pointer = ($this -> gct_size * 3) + 12;

	}

	/**
	 * [__destruct description]
	 */
	function __destruct() {
		//fclose($this -> filehandle);
	}

	/**
	 * [string_to_hex description]
	 * @param  [type] $input [description]
	 * @return [type]        [description]
	 */
	static function string_to_hex($input) {
		$hex_values = [];
		$input_length = strlen($input);
		for($i = 0; $i < $input_length; $i++) {
			$hex_values[] = dechex(ord($input[$i]));
		}
		return $hex_values;
	}
}

$gif = new gif("http://i.imgur.com/uwBNxK4.gif");
$gif -> read_header();

var_dump($gif);