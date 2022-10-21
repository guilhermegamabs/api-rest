import Aluno from '../models/Aluno';
import Foto from '../models/Foto';

class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
      order: [['id', 'ASC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename'],
      },
    });
    res.json(alunos);
  }

  async store(req, res) {
    try{
      const aluno = await Aluno.create(req.body);

      return res.json(aluno);
    } catch(e) {
      return res.status(400).json({
        errors: e.erros.map(err => err.message),
      });
    }
  }

  async show(req, res) {
    try {
    const { id } = req.params;

    if(!id) {
      return res.status(400).json({
        errors: ['Missing ID'],
      });
    }

    const aluno = await Aluno.findByPk(id, {
      attributes: ["id", "nome", "sobrenome", "email", "idade", "peso", "altura"],
      order: [['id', 'ASC'], [Foto, 'id', 'DESC']],
      include: {
        model: Foto,
        attributes: ['filename'],
      },
    });

    if(!aluno) {
      return res.status(400).json({
        erros: ['This aluno does not exists.'],
      });
    }

    return res.json(aluno);
    }catch(e) {
      return res.status(400).json({
        errors: e.err.map(err => err.message),
      });
    }
  }

  async delete(req, res) {
    try{
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
        return res.status(400).json({
          errors: ['This aluno does not exists'],
        });
      }

      await aluno.destroy();
      return res.json({
        apagado: true,
      });

    } catch(e) {
      return res.status(400).json({
        errors: e.err.map(err => err.message),
      });
    }
  }

  async update(req, res) {
    try{
      const { id } = req.params;

      if(!id) {
        return res.status(400).json({
          errors: ['ID missing'],
        })
      }

      const aluno = await Aluno.findByPk(id);

      if(!aluno) {
         return res.status(400).json({
          errors: ['This aluno does not exists'],
         });
      }

      const alunoAtualizado = await aluno.update(req.body);
      return res.json(alunoAtualizado);
    } catch(e) {
      return res.status(400).json({
        errors: e.err.map(err => err.message),
      });
    }
  }
}

export default new AlunoController();
