package br.com.maddytec.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@JsonIgnoreProperties(ignoreUnknown = true)
@Entity(name = "endereco")
public class Endereco implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 150)
	@Column(nullable = false, length = 150)
	private String logradouro;

	@Size(max = 20)
	@Column(nullable = false, length = 20)
	private String numero;

	@NotBlank
	@Size(max = 60)
	@Column(nullable = false, length = 60)
	private String bairro;

	@Size(max = 150)
	@Column(length = 150)
	private String complemento;

	@NotBlank
	@Size(max = 60)
	@Column(nullable = false, length = 60)
	private String cidade;

	@NotBlank
	@Size(max = 60)
	@Column(nullable = false, length = 60)
	private String uf;

	@Size(max = 9)
	@Column(nullable = false, length = 9)
	private String cep;

	@ManyToOne
	@JsonBackReference
	@JoinColumn(name = "cliente_id", nullable = false)
	private Cliente cliente;

}