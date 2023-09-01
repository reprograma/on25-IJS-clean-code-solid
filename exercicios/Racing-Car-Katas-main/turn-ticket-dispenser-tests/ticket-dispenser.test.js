/* globals describe, it */
var jest = require('jest');

var TicketDispenser = require('../turn-ticket-dispenser/ticket-dispenser.js');

describe('TicketDispenser', () => {
	test('getTurnTicket retorna um objeto TurnTicket com um número de turno válido', () => {
	  const dispenser = new TicketDispenser();
	  const turnTicket = dispenser.getTurnTicket();
  
	  expect(turnTicket).toBeInstanceOf(TurnTicket);
	  expect(turnTicket.turnNumber).toBeDefined();
	  expect(typeof turnTicket.turnNumber).toBe('number');
	});
  });

  //É uma função construtora que cria objetos "Turn Ticket".
  //  Ele aceita um argumento chamado "turn Number" durante a criação do objeto e o armazena como uma propriedade interna "_turn Number" no objeto criado.