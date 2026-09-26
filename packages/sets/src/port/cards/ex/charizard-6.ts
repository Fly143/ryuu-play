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

export class Charizard_6 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Charmeleon";
  public hp: number = 120;
    public height?: number = 1.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Burning Energy", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may turn all basic Energy attached to all of your Pokémon into Fire Energy for the rest of the turn. This power can't be used if Charizard is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Scorching Whirlwind", cost: [], damage: "120", text: "Flip 2 coins. If 1 of them is tails, discard 2 Energy cards attached to Charizard. If both are tails, discard all Energy cards attached to Charizard." }
  ];
  public set: string = "EX";
  public name: string = "Charizard";
  public fullName: string = "Charizard EX 6";
  public text: string = "Charizard";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return /* structural */ state;
    }
    return state;
  }
}
