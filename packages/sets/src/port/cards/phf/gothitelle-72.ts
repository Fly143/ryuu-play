import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  BetweenTurnsEffect,
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

export class Gothitelle_72 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Gothorita";
  public hp: number = 130;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Magic Room", powerType: PowerType.ABILITY, text: "As long as this Pokémon is your Active Pokémon, your opponent can't play any Item cards from his or her hand.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Madkinesis", cost: [], damage: "30+", text: "Does 20 more damage for each Psychic Energy attached to this Pokémon." }
  ];
  public set: string = "PHF";
  public name: string = "Gothitelle";
  public fullName: string = "Gothitelle PHF 72";
  public text: string = "Gothitelle";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 20);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "noTrainers");
    }
    if (effect instanceof BetweenTurnsEffect) {
      return commonEffects.refreshPowerAura(this, store, state, effect.player, "noTrainers");
    }
    return state;
  }
}
