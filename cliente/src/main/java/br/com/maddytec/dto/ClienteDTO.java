package br.com.maddytec.dto;

import br.com.maddytec.domain.TipoPessoa;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClienteDTO {

	private Long id;
	private String nome;
	private String foneMovel;
	private String foneFixo;
	private String email;
	private String documentoReceitaFederal;
	private TipoPessoa tipo;
	
	@Builder.Default
	private List<EnderecoDTO> enderecos = new ArrayList<>();
	
}
