package br.com.maddytec.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.io.Serializable;
import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
@JsonIgnoreProperties(ignoreUnknown =  true)
@Entity(name = "produto")
public class Produto implements Serializable {

	private static final long serialVersionUID = -8907663301346974973L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Column(length = 80, nullable = false)
	private String nome;

	@NotBlank
	@Column(length = 20, unique = true, nullable = false)
	private String sku;

	@NotNull
	@Column(name = "valor_unitario", nullable = false, precision = 10, scale = 2)
	private BigDecimal valorUnitario;

	@NotNull
	@Min(value = 0, message = "não pode ser menor que 0")
	@Max(value = 9999, message = "não pode ser maior ou igual a 9999")
	@Column(name = "quantidade_estoque", nullable = false, length = 4)
	private Long quantidadeEstoque;

	@NotNull
	@ManyToOne
	@JoinColumn(name = "categoria_id", nullable = false)
	private Categoria categoria;
}