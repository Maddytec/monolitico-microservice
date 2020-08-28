package br.com.maddytec.domain;

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
@JsonIgnoreProperties(ignoreUnknown =  true)
@Entity(name = "categoria")
public class Categoria implements Serializable {

	private static final long serialVersionUID = -5044963551985742089L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@NotBlank
	@Size(max = 60)
	@Column(nullable = false, length = 60)
	private String descricao;

	@ManyToOne
	@JoinColumn(name = "categoria_pai_id")
	private Categoria categoriaPai;

}
