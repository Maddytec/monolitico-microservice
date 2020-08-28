package br.com.maddytec.resource.exception;

import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ApiError implements Serializable {

	private static final long serialVersionUID = 1L;
	private int code;
	private String message;
	private Date date;
}
