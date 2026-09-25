import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class TeamMagmaSMightyena_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Team Magma's Poochyena";
  public hp: number = 80;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Call for Help", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Team Magma's Mightyena is your Active Pokémon, you may search your deck for a Pokémon with Team Magma in its name, show it to your opponent, and put it into your hand. Shuffle your deck afterward. This power can't be used if Team Magma's Mightyena is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Lunge", cost: [], damage: "50", text: "Flip a coin. If tails, this attack does nothing." }
  ];
  public set: string = "MA";
  public name: string = "Team Magma's Mightyena";
  public fullName: string = "Team Magma's Mightyena MA 37";
  public text: string = "Team Magma's Mightyena";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "flipTailsBaseDamage:0");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
